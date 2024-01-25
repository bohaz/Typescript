let message: string = "Hello World"

message = "Ronald"

console.log(message)

message = "Bye World"

/**
 * types in typescript
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * fuction
 * 
 * types in typescript
 * any -> not recommended
 * unknown 
 * never
 * arrays
 * tuples
 * enums
 */

let dinosaurExintion: number = 76_000_000
let favoriteDinosaur: string = "Velociraptor"
let isExtinct: boolean = true

function sayHello(config: any) {
  return config
}