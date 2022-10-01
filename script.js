function resetall()
{
   

   document.getElementById('signup-form').reset()

   document.getElementById('first-valid').style.display='none'
   document.getElementById('last-valid').style.display='none'
   document.getElementById('email-valid').style.display='none'
   document.getElementById('password-valid').style.display='none'
   document.getElementById('confirmpassword-valid').style.display='none'


}

function signup(field)
{
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let confirmpassword=document.getElementById('confirmpassword').value 
    let agree=document.getElementById("t-and-c").checked
    
   var validate=true
    // first name
    if(field=='first_name' || field=='all')
    {
      
   if(firstname.length>=3 )
   {
    document.getElementById('first-valid').style.display='block'
    document.getElementById('first-invalid').style.display='none'
   }
   else
   {
      validate=false
    document.getElementById('first-invalid').style.display='block'
    document.getElementById('first-valid').style.display='none'
   }
}

if(field=='last_name'|| field=='all')
{
    // last name
   if(lastname.length>=3
     )
   {
      
    document.getElementById('last-valid').style.display='block'
    document.getElementById('last-invalid').style.display='none'
   }
   else
   {
      validate=false
    document.getElementById('last-invalid').style.display='block'
    document.getElementById('last-valid').style.display='none'
   }
}
   
//    email
// should contains @ and .
// there should be at least 1 character before @
// there should be at least 2 character after .
//email.indexOf('@')>0 && email.substr(email.lastIndexOf('.')+1).length>1
if(field=='email' || field=='all')
{
    let lastindex=email.lastIndexOf(".")
    let lastcharlen=email.length-lastindex
    
if( email.includes('@') && email.includes('.') &&  email.length>0 && lastcharlen>2 && email[0]!='@' )
   {
   
    document.getElementById('email-valid').style.display='block'
    document.getElementById('email-invalid').style.display='none'
   }
   else
   {
   
      validate=false
   document.getElementById('email-invalid').style.display='block'
    document.getElementById('email-valid').style.display='none'
   }
}
// password
   if(field=='password' || field=='all')
   {
    let spcharvalidate=checkspchar(password)
    let numvalidate=checknum(password)
   
    console.log("Ans "+spcharvalidate)
   if(password.length>=8 && spcharvalidate && numvalidate)
   {
    document.getElementById('password-valid').style.display='block'
    document.getElementById('password-invalid').style.display='none'
   }
   else
   {
      validate=false
    document.getElementById('password-invalid').style.display='block'
    document.getElementById('password-valid').style.display='none'
   }
}

function checkspchar(password)
{
    let chararr=["@","#","$"]
    for(i of chararr)
    {
        if(password.includes(i))
        {
            return true
            break
        }
    }

    return false
}
function checknum(password)
{
    let chararr=[0,1,2,3,4]
    for(i of chararr)
    {
        if(password.includes(i))
        {
            return true
            break
        }
    }

    return false
}
   
//    confirmpassword
if(field=='confirmpassword' || field=='all')
{
if(confirmpassword===password)
{

 document.getElementById('confirmpassword-invalid').style.display='none'
}
else
{
   validate=false
 document.getElementById('confirmpassword-invalid').style.display='block'

}
}

if(field=='agree' || field=='all')
{
   if(agree)
   {
      
      document.getElementById('agree-invalid').style.display='none'
   }
   else
   {
      validate=false
      document.getElementById('agree-invalid').style.display='block'
    
   }
}

// console.log(validate)
if(validate && field=='all')
{

  
   alert("Your details have been saved Successfully!")
  document.getElementById("signup-form").reset()
}
}