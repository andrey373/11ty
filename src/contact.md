---
layout: 'layouts/contactpage.njk'
title: 'Contact Me'
logo: '../assets/logo.png'
---

<form name="contact" method="POST" data-netlify="true" class="contact-form">
  <div class="">
    <label for="exampleInputName" name="name" class="form-label">Name</label>
    <input type="ntext" class="form-control" name="name" id="exampleInputName" aria-describedby="emailHelp">
  </div>
  <div class="">
  <label for="exampleFormControlTextarea1" class="form-label" name="message" >Message</label>
  <textarea class="form-control" 
  name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Send a message</button>
</form>
