import { Failure } from "../Failure"
import { Success } from "../Success"

export type Result<Error, Data> = Failure<Error> | Success<Data>
