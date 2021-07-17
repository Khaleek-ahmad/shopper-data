export class FilterError{
   

  public errorDesc:any={};
  public traverse (value,key?) {
      if (this.isArray(value)) {
          this.traverseArray(value)
      } else if ((typeof value === 'object') && (value !== null)) {
          this.traverseObject(value)
      } else {
                 
          if(this.isValidMessage(key)){
             
              if(value !== null)
              this.errorDesc[key.toLocaleLowerCase()] =value;
          }
      }
    }
    
    public traverseArray (arr) {
      // arr.forEach(function (x) {
      //     this.traverse(x)
      // })
    }
    
    public traverseObject (obj) {
     
      for (let key in obj) {
        //if (obj.hasOwnProperty(key))
         {     
           this.traverse(obj[key],key)
        }
      }
    }
    
    public isArray (o) {
      return Object.prototype.toString.call(o) === '[object Array]'
    }

    public isValidMessage(key:string){

      key = key.toLocaleLowerCase();
    //  if(key=="message"|| key==="url"|| key=="path"||key=="error"||key=="status"||key=="exception"||key=="error")

    if(key=="message"|| key==="url"|| key=="path"||key=="error"||key=="exception"||key=="errors"){
     
          return true;
    }
      else
          return false;
    }
    
}