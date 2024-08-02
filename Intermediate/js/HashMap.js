class HashMap{
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;

    }
    return hashCode
  }

  set(key, value) {
    if (typeof key !== 'string') {
      throw new Error('only string keys are supproted');
    }

    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    const entry = bucket.find(([k]) => k == key);

    if (entry) {
      entry[1] = value;
    } else {
      bucket.push([key, value]);
      this.size ++;
    }
    if (this.size / this.buckets.length > this.loadFactor) {
      this.grow();
    }
  }

  get(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const entry = this.buckets[index].find(([k]) => k == key);
    return entry ? entry[1] : null;
  }

  has(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    return this.buckets[index].some(([k]) => k === key);
  }

  remove(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    const entryIndex = bucket.findIndex(([k]) => k === key);

    if (entryIndex !== -1) {
      bucket.splice(entryIndex, 1);
      this.size--;
      return true;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    return this.buckets.flatMap(bucket => bucket.map(([key]) => key));
  }

  values() {
    return this.buckets.flatMap(bucket => bucket.map(([, value]) => value));
  }

  entries() {
    return this.buckets.flatMap(bucket => bucket);
  }

  grow() {
    const newCapacity = this.buckets.length * 2;
    const newHashMap = new HashMap(newCapacity, this.loadFactor);

    for (const [key, value] of this.entries()) {
      newHashMap.set(key, value);
    }

    this.buckets = newHashMap.buckets;
  }

  checkBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
}

const test = new HashMap();

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'yellow')
test.set('lion', 'red')
test.set('moon', 'silver')


console.log(test.has('kite'));
console.log(test.remove('kite'));
console.log(test.has('kite'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.clear());
console.log(test.length());

class HashSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  add(key) {
    if (typeof key !== 'string') {
      throw new Error('Only string keys are supported');
    }

    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    if (!bucket.includes(key)) {
      bucket.push(key);
      this.size++;

      if (this.size / this.buckets.length > this.loadFactor) {
        this.grow();
      }

      return true;
    }

    return false;
  }

  has(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    return this.buckets[index].includes(key);
  }

  remove(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    const keyIndex = bucket.indexOf(key);

    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
      this.size--;
      return true;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    return this.buckets.flat();
  }

  grow() {
    const newCapacity = this.buckets.length * 2;
    const newHashSet = new HashSet(newCapacity, this.loadFactor);

    for (const key of this.keys()) {
      newHashSet.add(key);
    }

    this.buckets = newHashSet.buckets;
    this.size = newHashSet.size;
  }

  checkBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
}