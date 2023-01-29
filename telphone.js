// A telephone package that adds phone numbers, removes phone numbers from a set
// using the observer pattern to achieve this, we have methods to add, remove and notify observers. 
class TelephonePackage{
    constructor(){
        // creates a non duplicate list of observers(users)
        this.observers = new Set()
        // creates a non duplicate list of phonenumbers
        this.contacts = new Set()
    }
    addPhoneNumber(number){
        // just like push method in array, the add method for a set pushes the number to contacts
        this.contacts.add(number);


    }
    removePhoneNumber(number){
        // removes a number from the contacts list
        this.contacts.delete(number)


    }
    dialPhoneNumber(number){
        // this method checks if a number has already been added it should use the notifyObserver method to print "Dialing number"to the console else return the number is not in contacts list.
        if(this.contacts.has(number)){
            
            this.notifyObservers(`Dialing ${number}`)
        }
        else{
            this.notifyObservers(`This ${number} is not in contacts list`)
        }
    

        
    }
    printNumber(number){
        // this method prints the number that was added
        if(this.contacts.has(number)){
            console.log(`Printing number: ${number}`)
        }
    }

    addObservers(observer){
        // adds observers to the observer list
        this.observers.add(observer)
    }

    removeObservers(observer){
        // removes observers from the list
        this.observers.delete(observer)
    }
    notifyObservers(message){
        // a method that is called to notify each observer in a list and update it with a message
        for(const observer of this.observers){
            observer.update(message)
        }
    }
    
}

class Observer{
    // the class Observer for each observer
    constructor(name) {
        this.name = name;
    }
    //update method is called to print the users name, status and the message you want to pass in it.
    update(message){
        console.log(`${this.name.user} [${this.name.status}]: ${message}`)
        


    }
}
// a new instance is created from the class TelephonePackage and class Observer

const telephone = new TelephonePackage()
const juliet = new Observer({user:"Juliet", status: "Online"})
telephone.addObservers(juliet)

const numberOne = 2347062175886
telephone.addPhoneNumber(numberOne)
telephone.notifyObservers("You'll get a notification soon")
telephone.printNumber(numberOne)
telephone.dialPhoneNumber(numberOne)