type Node<T> = {
	value: T,
	next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
		private head: Node<T> | undefined;
		private tail: Node<T> | undefined;

    constructor() {
			this.head = this.tail = undefined;
			this.length = 0;
		}

    enqueue(item: T): void {
			const node = {value: item} as Node<T>; // Create node
			this.length ++;

			if(!this.tail) {
				this.tail = this.head = node;
				return;
			}

			this.tail.next = node;
			this.tail = node;
		}
    deque(): T | undefined {
			if (!this.head) {
				return undefined;
			}

			this.length--;

			const head = this.head; // Save head
			this.head = this.head.next; // Update head

			// Free memory 
			head.next = undefined; // Delete head

			if (this.length === 0) {
				this.tail = undefined;
			}

			return head.value; // Return value
		}
    peek(): T | undefined {
			return this.head?.value;
		}
}
