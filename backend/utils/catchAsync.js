const catchAsync = (requestHandler) => {
    if(typeof requestHandler !== 'function'){
        throw new Error("asyncHandler expects a function");
    }

    return (req, res, next) => {
        requestHandler(req, res, next).catch((error) => next(error))
    }
}

export {catchAsync}