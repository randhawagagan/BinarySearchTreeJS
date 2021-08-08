class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  
  constructor(){
    this.root = null;
  }
  

  lookup(value){

    if(!this.root){
      return false;
    }

    let currentNode = this.root;

    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left
      }else if(value > currentNode.value){
        currentNode = currentNode.right;
      }else if(value === currentNode.value){
        return currentNode;
      }
    }
    return false;

  }

  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }

}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.lookup(9);
// JSON.stringify(traverse(tree.root))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}