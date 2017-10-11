//Author: Mario J. Merendino
//Date: July 14, 2017
//Desc: Basic functions for implementing a Binary Search Tree by hand. 


/*
var t;
function main(){
    t = new Tree();
    t.addNode(5);
    t.addNode(4);
    t.addNode(12);
    t.addNode(9);
    console.log("InOrderTraversal");
    t.inOrderTraverse(t.root);
    console.log("PreOrderTraversal");
    t.preOrderTraverse(t.root);
    console.log("PostOrderTraversal");
    t.postOrderTraverse(t.root);
    console.log(t);
    
}*/
//Node Obj
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}
//Tree Obj
function Tree(){
    this.root = null;
    //number of elements in tree (updated in addNode)
    this.size = 0;
    //used for search function.
    this.found = false;
    //how tall is the tree (updated in addNode)
    this.depth = 0;
    
    //Add Node function
    //param n = INT number youre adding
    this.addNode = function(n){
        addedNode = new Node(n);
        //if the tree is empty, set the new node as the root
        if(this.root == null){
            console.log("First node added")
            this.root = addedNode;
        }
        //else find where the node belongs and put it there
        else{
            //run helper method
            this.recursiveAdd(addedNode,this.root);
        }
        //update 
        this.size++;
        this.setDepth();
    }
    //ADD NODE HELPER METHOD (RECURSIVE)
    this.recursiveAdd = function(newNode, tempRoot){
        //Checks if root is null.
        if(tempRoot == null){
            tempRoot = newNode;
        }
        else if(newNode.value < tempRoot.value){
            //console.log("GO LEFT")
            if(tempRoot.left == null){
                tempRoot.left = newNode;
            }
            else{
                this.recursiveAdd(newNode, tempRoot.left)
            }
        }
        else if(newNode.value > tempRoot.value){
            //console.log("GO RIGHT")
            if(tempRoot.right == null){
                tempRoot.right = newNode;
            }
            else{
                this.recursiveAdd(newNode, tempRoot.right)
            }
        }
    }

    //ALL TRAVERSALS YOU MUST PASS THE TREES ROOT 
    //ex... TREE.inOrderTraverse(TREE.root)
    //Inorder Traversal
    this.inOrderTraverse = function(tempRoot){
        if(tempRoot == null)
            return
        this.inOrderTraverse(tempRoot.left);
        console.log(tempRoot.value);
        this.inOrderTraverse(tempRoot.right)
    }
    //Post Order Traversal
    this.postOrderTraverse = function(tempRoot){
        if(tempRoot == null)
            return
        this.postOrderTraverse(tempRoot.left);
        this.postOrderTraverse(tempRoot.right);
        console.log(tempRoot.value);

    }
    //Pre Order Traversal
    this.preOrderTraverse = function(tempRoot){
        if(tempRoot == null)
            return
        console.log(tempRoot.value);
        this.preOrderTraverse(tempRoot.left);
        this.preOrderTraverse(tempRoot.right)
    }

    //Searches for a value, MUST PASS INT
    //param n = int youre searching for
    this.search = function(n){
        if(this.root.value == n){
            console.log("FOUND");
        }
        else{
            this.recursiveSearch(n, this.root)
            if(this.found){
                console.log("FOUND");
                this.found = false;
            }
            else{
                console.log("NOT FOUND");
            }
        }
        
    }
    //SEARCH HELPER METHOD (RECURSIVE PART)
    this.recursiveSearch = function(n, tempRoot){
        if(tempRoot == null){
            return
        }
        if(tempRoot.value == n){
            this.found = true;
            return
        }
        else if(n < tempRoot.value){
            console.log(n + " < " + tempRoot.value)
            this.recursiveSearch(n, tempRoot.left);
        }
        else{
            this.recursiveSearch(n, tempRoot.right);
        }
    }

    //sets the depth variable. Used evertime after a node is added to the tree. 
    this.setDepth = function(){
        this.depth = this.recursiveDepth(this.root);
    }
    this.recursiveDepth = function(tempRoot){
        if(tempRoot == null)
            return 0;
        else{
            var lDepth = this.recursiveDepth(tempRoot.left);
            var rDepth = this.recursiveDepth(tempRoot.right);

            if(lDepth > rDepth){
                return(lDepth + 1)
            }
            else{
                return(rDepth +1)
            }
        }
    }
    //returns the path of a number your looking for as a string
    this.getPath= function(num){
        var ans;
        var tempRoot = this.root;
        if(tempRoot.value == num){
            ans = tempRoot.value;
        }
        else{
            var endLoop = false;
            while(!endLoop){
                ans = ans + " " + tempRoot.value
                if(tempRoot.value < num){
                    tempRoot = tempRoot.right;
                    
                }
                else if(tempRoot.value > num){
                    tempRoot = tempRoot.left;
                }
                else if(tempRoot.value == num){
                    endLoop = true;
                }
                if(tempRoot == null){
                    ans = " ";
                    endLoop = true;
                }
            }
        }
        return ans;
    }

}
    
