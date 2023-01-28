const Task = require('../model/Task')
const asyncWrapper = require('../middleware/async')
const {customErrorHandler} = require('../errors/custom_error')

const getAllTasks = asyncWrapper( async (req, res)=>{
    
    const tasks = await Task.find({})
    res.status(200).json({tasks})
    
}) 

const createTask = asyncWrapper( async (req, res)=>{
   
    const task = await Task.create(req.body)
    res.status(201).send({task})
    
})

const getTask = asyncWrapper( async (req, res, next)=>{
 
    const {id:taskId} = req.params
    const task = await Task.findOne({_id:taskId})
    if(!task) 
    {   
        const error = customErrorHandler(`Id ${taskId} not Found`,404)
        return next(error)
    }
         
    return res.status(200).json({task})
    
})

const deleteTask = asyncWrapper( async (req, res)=>{
    
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if(!task) 
    {
        const error = customErrorHandler(`Id ${taskId} not Found`,404)

        return next(error)
    }

    return res.status(200).json(task)
    
})

const updateTask = asyncWrapper( async (req, res)=>{
    
    const {id:taskId} = req.params
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
        new:true,
        runValidators:true
    })
    if(!task)
    {
        const error = customErrorHandler(`Id ${taskId} not Found`,404)

        return next(error)
    } 

    return res.status(200).json({task})
        
    
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}