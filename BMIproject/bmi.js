// for forms we need have event like submit like not click type of events
const form=document.querySelector('form');
//if we take the height values of height and weight out side of event nothing stored in that , becuase we are giving the values at that instant only or event only
//ex:const height=parseInt(document.getElementById('#height').value)
// as we are not submitting any value means in data base we are post or get any value, we are doing at the js level so we need to stop the behaviour of get or post methodsfor that we have a eventlistener
form.addEventListener('submit',function(e){
    e.preventDefault(); //event id used to stop the post/get 
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    console.log(height,weight)
    const results=document.querySelector('#results')
    console.log(results);
    if (height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please enter the valid height ${height} value`
    }
    else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please enter the valid height ${weight} value`
    }
    else{
        const bmi=(weight/((height**2)/10000)).toFixed(2);
        if (bmi<18.6){
            results.innerHTML=`<span>${bmi}</span> <br><p>You are under-weighted</p>`
        }
        else if (bmi>=18.6 && bmi<=24.9){
            results.innerHTML=`<span>${bmi}</span> <br>You are perfected-weighted`
        }
        else{
            results.innerHTML=`<span>${bmi}</span <br>You are over-weighted>`
        }
        // showing the result
        
    }
})
