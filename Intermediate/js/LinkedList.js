class Node{
    constructor(value) {
        this.value = value;
        this.nextNode = null
    }
}

class LinkedList{
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    preapend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current.newNode) {
            count++;
            current = current.newNode;
        }
        return count;
    }

    get head() {
        return this.headNode
    }
    get tail() {
        if (!this.headNode) return null;
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }
    at(index) {
        if (index < 0) return null;
        let current = this.headNode;
        for (let i = 0; i < index; i++) {
            if (!current) return null;
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (!this.headNode) return;
        if (!this.headNode.nextNode) {
            this.headNode = null;
            return;
        }
        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.headNode;
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + 'null';
    }

    insertAt(value, index) {
        if (index < 0) return;
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = new Node(value);
        const prevNode = this.at(index - 1);
        if (!prevNode) return;
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
    }

    removeAt(index) {
        if (index < 0 || !this.headNode) return;
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        const prevNode = this.at(index - 1);
        if (!prevNode || !prevNode.nextNode) return;
        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());