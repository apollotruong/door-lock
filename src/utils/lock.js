class Lock {
    //lock_status is true if door is locked
    constructor(status){
        this.lock_state = status;
    }
    //gets lock status 
    get lockStatus(){
        if(!this.lock_state){
            return 'Unlocked';
        }else{
            return 'Locked';
        }
    }
    //returns true if lock succeeds else 0
    engageLock() {
        if(!this.lock_state){
            this.lock_state = !this.lock_state;
            console.log('Lock Engaged');
        }else{
            console.log('Lock is already disengaged');
        }
    }
    //returns false if unlock succeeds else 0
    disengageLock() {
        if(this.lock_state){
            this.lock_state = !this.lock_state;
            console.log('Lock disengaged');
        }else{
            console.log('Lock is already engaged');
        }
    }
    toggleLock(){
        this.lock_state = !this.lock_state;
    }
}
export default Lock;