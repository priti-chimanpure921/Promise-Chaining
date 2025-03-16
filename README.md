# Promise Chaining in JavaScript

<h4>Promises</h4>

<p>
Promise is an object.
The promise object represents eventual completion or failure of an asynchronous operation or it’s resulting value which gets stored in the object.
</p>

<h4>Completion -> success -> result->resolve.</h4>
<h4>Failure -> Failure -> Error->Reject.</h4>

<p>Promise object has two callbacks <b>resolve</b> and <b>reject</b>.
Resolve is sucees’s callback.
Reject is failure’s callback.
<p>
Asynchronous function is a function whose output depend on many factors.
Asynchronous function returns a promise having two values success / resolve or failure / reject.
</p>

<h4>Promise has two states resolve and reject.</h4>
<ul>
<li>
Resolve state : when promise is fulfilled.</li>
<li>
Reject state : when promise is not fulfilled.</li>
</ul>

If the promise is fulfilled then then() method gets executed.
If the promise is rejected then catch() method gets executed.

<p>Promises are rejected and resolved with some data ( valid result or error ).</p>
<ul>
<li>then(result)</li>
<li>catch(error)</li>

<p>Asynchronous JavaScript Coding can be done with the help of promises. </p>