


// Compare binary trees to check if they are equal in structure and values
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

	//Base cases
	// Structure check-> Cant recuse any further, structurally the same
	if (a == null && b == null) {
		return true;
	}

	// Structure check-> Structurally not the same
	if (a == null || b == null) {
		return false;
	}

	// Value check
	if (a.value != b.value) {
		return false;
	}

	return compare(a.left, b.left) && compare(a.right, b.right); 
}