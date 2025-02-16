type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    push(item: T): void {
			const node = { value: item } as Node<T>;

			this.length++;

			if (!this.head) {
				this.head = this.tail = node;
				return;
			}

			node.prev = this.head;
			this.head = node;
		}
    pop(): T | undefined {
			if (!this.head) {
				return undefined;
			}

			const temp = this.head;
			this.head = this.head.prev;

			// Free node

			this.length--;

			return temp.value;
		}
    peek(): T | undefined {
			if (!this.head) {
				return undefined;
			}
			else {
				return this.head.value;
			}
		}
}
