import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import ES5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parathesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-array";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function JavaScript() {
    console.log('Hello World');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <WorkingWithArrays/>  
          <ArrayIndexAndLength/>    
          <AddingAndRemovingDataToFromArrays/>
          <ForLoops/>
          <MapFunction/>
          <JSONStringify/>
          <FindFunction/>
          <FindIndex/>
          <FilterFunction/>
       </div>
    );
 }
 export default JavaScript