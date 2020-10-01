// Your code here
class Polygon {
  constructor(array){
  this.sides = array
  this.count = array.length
    // initializer for this class
    // array -> represents the sides of the this polygon
  }
    get countSides(){
    return this.sides.length

    }

    get perimeter(){
      let sum = 0
      for ( let i = 0; i < this.sides.length; i++) {

        sum = sum + this.sides[i]
        // total equals the side of each array
        // sum = 0  + index[0] etc...
      }

      return sum
    }

}