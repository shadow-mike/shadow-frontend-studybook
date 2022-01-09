/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
    this.users = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.users.has(userId)) {
        this.users.set(userId, new User(userId));
    }
    const u = this.users.get(userId);
    u.post(tweetId);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.users.has(userId)) {
        this.users.set(userId, new User(userId));
        return [];
    }
    const u = this.users.get(userId);
    const tweets = Array.from(u.followed).reduce((prev, cur) => {
        prev.push(...this.users.get(cur).tweets);
        return prev;
    }, []);
    const res = [];
    const h = new Heap(tweets, 'time');
    let k = 10;
    while (k--) {
        const tweet = h.pop();
        if (!tweet) break;
        res.push(tweet.id);
    }
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, new User(followerId));
    }
    if (!this.users.has(followeeId)) {
        this.users.set(followeeId, new User(followeeId));
    }
    const u = this.users.get(followerId);
    u.follow(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, new User(followerId));
        return;
    } 
    const u = this.users.get(followerId);
    u.unfollow(followeeId);
};

let timestamp = 0;

function Tweet(id, timestamp) {
    this.id = id;
    this.time = timestamp;
}

function User(id) {
    this.id = id;
    this.followed = new Set();
    this.tweets = [];
    this.follow(id);
}
User.prototype.follow = function (id) {
    this.followed.add(id);
}
User.prototype.unfollow = function (id) {
    if (this.id !== id) {
        this.followed.delete(id);
    }
}
User.prototype.post = function(id) {
    const tweet = new Tweet(id, timestamp);
    timestamp++;
    this.tweets.unshift(tweet);
}

// 维护一个大顶堆
class Heap {
    constructor(arr, key) {
        this.data = [];
        this.key = key;
        this.sort(arr);
    }
    get size() {
        return this.data.length;
    }
    peek() {
        return this.data[0];
    }
    sort(arr) {
        const size = arr.length;
        for (let i = 0; i < size; i++) {
            this.insert(arr[i]);
        }
    }
    siftUp(i) {
        let idx = i;
        while (idx > 0) {
            const parentIdx = (idx - 1) >>> 1;
            if (this.data[idx][this.key] > this.data[parentIdx][this.key]) {
                this.swap(idx, parentIdx);
            } else {
                return;
            }
            idx = parentIdx;
        }
    }
    siftDown(i) {
        let idx = i;
        const lastIdx = this.size - 1;
        const half = (lastIdx - 1) >>> 1;
        while (idx <= half) {
            let mostIdx = idx;
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            if (leftIdx <= lastIdx && this.data[mostIdx][this.key] < this.data[leftIdx][this.key]) {
                mostIdx = leftIdx;
            }
            if (rightIdx <= lastIdx && this.data[mostIdx][this.key] < this.data[rightIdx][this.key]) {
                mostIdx = rightIdx;
            }
            if (mostIdx === idx) return;
            this.swap(mostIdx, idx);
            idx = mostIdx;
        }
    }
    insert(val) {
        this.data.push(val);
        // console.log(this.data)
        this.siftUp(this.size - 1);
    }
    pop() {
        this.swap(0, this.size - 1);
        const val = this.data.pop();
        if (this.size > 1) {
            this.siftDown(0);
        }
        return val;
    }
    swap(i, j) {
        if (i === j) return;
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

/**
["Twitter","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","getNewsFeed"]\n[[],[1,5],[1,3],[1,101],[1,13],[1,10],[1,2],[1,94],[1,505],[1,333],[1]]
 */