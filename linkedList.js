class Node{
    constructor(value,next,prev){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.last = null;
        this.length = 0;
    }

    insertAtBegining(data){
        let newNode = new Node(data , this.head,this.last);
        if(this.head==null){
            this.last = newNode;
            newNode.next = newNode;
        }
        newNode.prev = this.last;
        this.head = newNode;
        this.length++;
    }

    insertAtEnd(data){
        if(this.length==0){
            console.log('-------------------------------------')
            console.log('Please Insert At Begining As List is empty');
            console.log('-------------------------------------')
            return ;
        }

        let newNode =new Node(data,this.head,this.last);

        this.last.next = newNode;
        this.last = newNode;

        this.length++;
    }

    insertInBetween(data,position){
        if(this.length < position){
            console.log('-------------------------------------')
            console.log('Invalid Position : Linked List length is smaller');
            console.log('-------------------------------------')
            return ;
        }

        if(position==0 || position==this.length){
            console.log('-------------------------------------')
            console.log('Please Use insertAtBegining OR insertAtEnd Function');
            console.log('-------------------------------------')
            return ;
        }

        let no = 1;
        let tempNode = this.head; 
        while(no < position-1){
            no++;
            tempNode = tempNode.next;
        }

        let newNode = new Node(data,tempNode.next,tempNode);
        tempNode.next = newNode;
        this.length++; 
    }

    checkIfExists(value){
        if(this.length == 0 ){
            console.log('-----------------------------------');
            console.log('Linked List IS Empty')
            console.log('-----------------------------------');
            return ;
        }

        let tempNode = this.head;
        
        if(tempNode.value == value){
            console.log('-----------------------------------');
            console.log('TRUE')
            console.log('-----------------------------------');
            return ;
        }
        tempNode = tempNode.next;
        while(tempNode != this.head){
            if(tempNode.value == value) {
                console.log('-----------------------------------');
                console.log('TRUE : Value Exists')
                console.log('-----------------------------------');
                return ;
            }
            tempNode = tempNode.next;
        }
        console.log('-----------------------------------');
        console.log('FALSE : Value DO NOT Exists')
        console.log('-----------------------------------');
    }



}


const ll = new linkedList()

// To insert into begining
ll.insertAtBegining(10)
ll.insertAtBegining(20)
ll.insertAtBegining(20)
ll.insertAtBegining(30)
ll.insertAtBegining(60)

//To insert At end
ll.insertAtEnd(40);
ll.insertAtEnd(40);
ll.insertAtEnd(90);
ll.insertAtEnd(900);

// Position should be in Range [2,linked List Length-1]
ll.insertInBetween(55,2);
ll.insertInBetween(55,3);
ll.insertInBetween(510,2);

//To check if element exists
ll.checkIfExists(10);


console.log(ll);

