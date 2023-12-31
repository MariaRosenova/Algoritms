class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}
function newNode(key){
    const temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;
}
function printList(node){
    let output = "";
    while (node!= null) {
        output += node.data + ' ';
        node = node.next;
    }
    console.log(output);
}
function merge(h1, h2){
    if (h1 == null) {
        return h2;
    }
    if (h2 == null) {
        return h1;
    }

    if(h1.data < h2.data){
        h1.next = merge(h1.next, h2);
        return h1;
    }
    else{
        h2.next = merge(h1, h2.next);
        return h2;
    }
}
const head1 = newNode(1);
head1.next = newNode(3);
head1.next.next = newNode(5);

const head2 = newNode(0);
head2.next = newNode(2);
head2.next.next = newNode(4);

const mergehead = merge(head1,head2);
printList(mergehead)
