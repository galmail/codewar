const competitor = 'John Doe';
let answerText = document.querySelector('#title');
const parsedData = [
  {
    id: 1,
    type: 'async',
    func: () => 'is',
  },
  {
    id: 11,
    func: null,
  },
  {
    id: 3,
    type: 'async',
    func: () => 'for',
  },
  {
    id: 4,
    type: 'async',
    func: () => 'Engineer',
  },
  {
    id: 10,
    func: null,
  },
  {
    id: 7,
    type: 'sync',
    func: () => 'Servicing',
  },
  {
    id: 9,
    type: 'sync',
    func: () => 'Top',
  },
  {
    id: 6,
    type: 'sync',
    func: () => 'Commercial',
  },
  {
    id: 2,
    type: 'async',
    func: () => '2019',
  },
  {
    id: 8,
    type: 'sync',
    func: () => 'Lab',
  },
  
  {
    id: 12,
    func: null,
  },
  {
    id: 13,
    func: null,
  },
];
const exec = (func) => {
  answerText.textContent += `${func()} 	\u00a0`;
};
const competitorSignature = () => answerText.textContent += `\r\n ${competitor} ` ;
const Heap = () => {
  let storeData = [];

  return {
    set: function(data) {
      storeData = data;
      return storeData;
    },
    get: function() {
      return storeData;
    }
  }
};

/***********************************************************************************************************
 *                                                                                                         *
 *                                JavaScript Engine & Runtime Environment                                  *
 *                                                                                                         *
 * ------------------------------------------------------------------------------------------------------- *
 *                                                                                                         *
 *                                              Background                                                 *
 *                                                                                                         *
 * ------------------------------------------------------------------------------------------------------- *
 *  Creation phase:                                                                                        *
 *    1) Js run time enviroment initialise Heap, CallStack, CallBackQueue and executes the Parser.         *
 *    2) Parser scanned the code and populated Heap.                                                       *
 *    3) Garbage collector cleans unused memory slots and will reorder Heap.                               *
 *    4) JS engine will populate CallStack.                                                                *
 *    5) Event Loop will populate CallBackQueue.                                                           *
 *  Execution phase                                                                                        *
 *    1) CallStack will be emptied.                                                                        *
 *    2) CallBackQueue will be emptied.                                                                    *
 *                                                                                                         *
 * ------------------------------------------------------------------------------------------------------- *
 *                                                                                                         *
 *                                              Description                                                *
 *                                                                                                         *
 * ------------------------------------------------------------------------------------------------------- *
 *  Heap: Expose get and set. Get returns an array of Objects with three attributes:                       *
 *      "id": <Number>                                                                                     *
 *      "type": <String> values: sync or async.                                                            *
 *      "func": <Function> values: Function or null.                                                       *
 *                                                                                                         *
 *  Garbage collector:                                                                                     *
 *      Removes all the Objects with "func" value to null.                                                 *
 *      and is ordering the array based on the id  in descending order id: 3-> id:2-> id:1->               *
 *                                                                                                         *
 *  Creation phase:                                                                                        *
 *      Runs garbage collection.                                                                           *
 *      Populates callStack[LIFO] from Heap with functions that are type sync.                             *
 *      EventLoop: Populates callBackQueue[FIFO] from Heap with functions that are type async.             *
 *                                                                                                         *
 *  Execution phase:                                                                                       *
 *      Empties callStack first.                                                                           *
 *      For each function that comes out of the stack                                                      *
 *      "exec" method should be invoked having as argument the pulled function: exec(function)             *
 *                                                                                                         *
 *      Then empties callBackQueue. For each function that comes out of the queue                          *
 *      "exec" method should be invoked having as argument the exported function: exec(function)           *
 *                                                                                                         *
 *                                                                                                         *
 * ---------------------------------------------------------------------------------------------------------
 *                                                                                                         *
 *                                < K O D E    -----    K A T A S >                                        *
 *                                                                                                         *
 * ---------------------------------------------------------------------------------------------------------  
 *                                                                                                         *
 *  Code Kata_1: Implement callStack (LIFO) =>  Should implement push and pull methods                     *
 *  Code Kata_2: Implement callBackQueue (FIFO) =>  Should implement push and pull methods                 *
 *  Code Kata_3: Implement GarbageCollector                                                                *
 *  Code Kata_4: Implement Creation phase                                                                  *
 *  Code Kata_5: Implement Execution phase                                                                 *
 *                                                                                                         *
 *  If well implemented                                                                                    *
 *  the invocation of the methods that were executed                                                       *
 *  should formulate a meaningful message:                                                                 *
 *      `Commercial Servicing Lab Top JavaScript Engineer for 2019 is: ${competitor}`                      *
 ***********************************************************************************************************/

/**
 * @name callStack
 * @description
 * LIFO data structure
 *
 * @private stack
 * 
 * @implements pull
 * @implements push
 * @implements length
 */
const CallStack = () => {

}

/**
 * @name callStack
 * @description
 * FIFO data structure
 *
 * @private queue
 * 
 * @implements pull
 * @implements push
 * @implements length
 */
const CallBackQueue = () => {

}


/**
 * @name garbageCollector
 * @description
 * Sets Heap following the below steps
 * Removes all Objects with "func" set to null
 * and is ordering the array based on the id, id: 1-> id:2-> id:3-> ....
 *
 * @param Object<Heap>
 * @returns Object<Heap>
 */

const garbageCollector = heap =>



/**
 * @name creationsPhase
 * @description
 * Executes Garbage Collector to clean the heap then
 * Populates callBackQueue & callStack
 *
 * @param Object<heap>
 * @param Object<callBackQueue>
 * @param Object<callStack>
 */
const creationsPhase = (heap, callStack, callBackQueue) =>



/**
 *  @name executionPhase
 *  @description 
 *  1) Empties callStack and for each method that is pulled 
 *     should invoke exec passing the pulled functions as argument to the exec: exec(func)
 *  2) Empties callBackQueue and for each method that is pulled 
 *     should invoke exec passing the pulled functions as argument to the exec: exec(func)
 *
 *  @param callBackQueue <callBackQueue>
 *  @param callStack <callStack>
 */
const executionPhase = (callStack, callBackQueue) => {

};

/**
 * @name parser
 * @description
 * Populates Heap
 * and then executes the garbageCollector against the Heap
 *
 * @param Object<heap>
 * @param Object<callBackQueue>
 * @param Object<callStack>
 * 
 * @return Object{ callStack, callBackQueue }
 */
const parser = (heap, callStack, callBackQueue) => {
  heap.set(parsedData);
  creationsPhase(heap, callStack, callBackQueue);
  return { callStack, callBackQueue };
};

 new Promise((resolve, reject) => {
  const heap = Heap();
  const callStack = CallStack();
  const callBackQueue = CallBackQueue();

  resolve(parser(heap, callStack, callBackQueue));
}).then(d => 
  executionPhase(d.callStack, d.callBackQueue)
).then(() => competitorSignature());