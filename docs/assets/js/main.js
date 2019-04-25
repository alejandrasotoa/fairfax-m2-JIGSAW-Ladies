"use strict";const preview=document.querySelector(".photo__container"),inputGreen=document.querySelector("#color1"),inputRed=document.querySelector("#color2"),inputBlue=document.querySelector("#color3");let colorValue=0;function fakeColorClick(e){e.click()}function paletteChange(e,t){preview.classList.remove("paletteRed","paletteGreen","paletteBlue"),preview.classList.add(e),colorValue=t.currentTarget.value,dataInfo.palette=colorValue,objStorage()}function getPalette(e){"2"===e.palette?fakeColorClick(inputRed):"3"===e.palette?fakeColorClick(inputBlue):fakeColorClick(inputGreen)}inputRed.addEventListener("click",function(){paletteChange("paletteRed",event)}),inputGreen.addEventListener("click",function(){paletteChange("paletteGreen",event)}),inputBlue.addEventListener("click",function(){paletteChange("paletteBlue",event)});const titleContainer=document.querySelectorAll(".design__title__container"),containerFull=document.querySelectorAll(".jscontainer");function closeCollapsible(){for(const e of containerFull)e.classList.add("hidden__collapsible")}function collapseSection(e){const t=e.currentTarget;!0===t.parentElement.classList.contains("hidden__collapsible")?(closeCollapsible(),t.parentElement.classList.remove("hidden__collapsible")):t.parentElement.classList.add("hidden__collapsible")}for(const e of titleContainer)e.addEventListener("click",collapseSection);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),photo=document.querySelector(".photo");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,photo.src=fr.result,objStorage()}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const sendButton=document.querySelector(".share__button"),form=document.querySelector("form"),urlLink=document.querySelector(".twitter__container--link"),urlContainer=document.querySelector(".twitter__container"),twitterButton=document.querySelector(".twitter__container--btn"),urlGenerated=document.querySelector(".twitter__container--link"),tweetCard=()=>{console.log(urlGenerated.innerHTML);const e=`Esta es mi tarjeta digital creada por JigSaw Ladies. ${urlGenerated.href}`;window.open(`https://twitter.com/intent/tweet?text=${e};hashtags=JigSawCards,Adalab,Adalabers`)};function waitForIt(){event.preventDefault(),sendButton.classList.add("disabled__button"),sendButton.setAttribute("disabled",!0),sendRequest()}function sendRequest(){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(dataInfo),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){showURL(e)}).catch(function(e){console.log(e)})}function showURL(e){e.success&&(urlLink.href=e.cardURL,urlLink.innerHTML=e.cardURL),urlContainer.classList.remove("hidden")}twitterButton.addEventListener("click",tweetCard),sendButton.addEventListener("click",waitForIt);const valueInputName=document.querySelector(".input__name"),valueName=document.querySelector(".preview__title"),valueInputJob=document.querySelector(".input__job"),valueJob=document.querySelector(".preview__subtitle"),valueInputTel=document.querySelector(".input__tel"),valueTel=document.querySelector(".preview__tel"),linkTel=document.querySelector(".rs__tel"),valueInputEmail=document.querySelector(".input__email"),valueEmail=document.querySelector(".preview__email"),linkEmail=document.querySelector(".rs__email"),valueInputLinkedin=document.querySelector(".input__linkedin"),valueLinkedin=document.querySelector(".preview__linkedin"),linkLinkedin=document.querySelector(".link__linkedin"),valueInputGithub=document.querySelector(".input__github"),valueGithub=document.querySelector(".preview__github"),linkGithub=document.querySelector(".link__github"),btnReset=document.querySelector(".btn__reset"),resetFields=document.querySelectorAll(".input__fill"),resetImg=document.querySelector(".preview__photo"),resetIcons=document.querySelectorAll(".reset__list"),twitterContainer=document.querySelector(".twitter__container"),shareButton=document.querySelector(".share__button"),dataInfo={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},defaultValues={palette:1,name:"Nombre Apellido",job:"Front-end Developer",phone:"",email:"",linkedin:"",github:"",photo:"https://via.placeholder.com/200x200/cccccc/666666/?text=IMAGE"};function previewCard(e,t,n){const l=e.currentTarget.value;""===l?(t.innerHTML=n,objStorage()):(t.innerHTML=l,objStorage())}function previewCardTel(e){const t=e.currentTarget.value;""===t?(linkTel.href="",valueTel.classList.add("hidden"),objStorage()):(linkTel.href=`tel:${t}`,valueTel.classList.remove("hidden"),objStorage())}function previewCardEmail(e){const t=e.currentTarget.value;""===t?(linkEmail.href="",valueEmail.classList.add("hidden"),objStorage()):(linkEmail.href=`mailto:${t}`,valueEmail.classList.remove("hidden"),objStorage())}function previewCardLinkedin(e){const t=e.currentTarget.value;""===t?(linkLinkedin.href="",valueLinkedin.classList.add("hidden"),objStorage()):(linkLinkedin.href=`https://www.linkedin.com/in/${t}`,valueLinkedin.classList.remove("hidden"),objStorage())}function previewCardGithub(e){const t=e.currentTarget.value;""===t?(linkGithub.href="",valueGithub.classList.add("hidden"),objStorage()):(linkGithub.href=`https://github.com/${t}`,valueGithub.classList.remove("hidden"),objStorage())}function objStorage(){dataInfo.name=valueInputName.value,dataInfo.job=valueInputJob.value,dataInfo.phone=valueInputTel.value,dataInfo.email=valueInputEmail.value,dataInfo.linkedin=valueInputLinkedin.value,dataInfo.github=valueInputGithub.value,dataInfo.palette=colorValue,dataInfo.photo=photo.src,storage()}function storage(){localStorage.setItem("dataInfo",JSON.stringify(dataInfo))}function getStorage(){const e=JSON.parse(localStorage.getItem("dataInfo"));null===e?storage():(""===e.name?(valueName.innerHTML=defaultValues.name,valueJob.innerHTML=defaultValues.job):(valueName.innerHTML=e.name,valueJob.innerHTML=e.job),profileImage.style.backgroundImage=`url(${e.photo}`,profilePreview.style.backgroundImage=`url(${e.photo}`,photo.src=e.photo,dataInfo.photo=e.photo,getPalette(e),valueInputName.value=e.name,valueInputJob.value=e.job,valueInputTel.value=e.phone,linkTel.href=`tel: ${e.phone}`,valueInputEmail.value=e.email,linkEmail.href=`mailto: ${e.email}`,valueInputLinkedin.value=e.linkedin,linkLinkedin.href=`https://www.linkedin.com/in/${e.linkedin}`,valueInputGithub.value=e.github,linkGithub.href=`https://github.com/${e.github}`,printIcon(e,"email",valueEmail),printIcon(e,"phone",valueTel),printIcon(e,"linkedin",valueLinkedin),printIcon(e,"github",valueGithub),objStorage())}function printIcon(e,t,n){""!==e[t]&&n.classList.remove("hidden")}function hiddenIcon(){for(const e of resetIcons)e.classList.add("hidden")}function hiddenFields(){for(const e of resetFields)e.value=""}function resetButton(){valueName.innerHTML=defaultValues.name,valueJob.innerHTML=defaultValues.job,profileImage.style.backgroundImage=`url(${defaultValues.photo})`,profilePreview.style.backgroundImage=`url(${defaultValues.photo})`,hiddenIcon(),hiddenFields(),fakeColorClick(inputGreen),twitterContainer.classList.add("hidden"),shareButton.setAttribute("disabled",!1),shareButton.classList.remove("disabled__button")}valueInputName.addEventListener("keyup",function(e){previewCard(e,valueName,"Nombre Apellido")}),valueInputJob.addEventListener("keyup",function(e){previewCard(e,valueJob,"Front-end Developer")}),valueInputTel.addEventListener("keyup",previewCardTel),valueInputEmail.addEventListener("keyup",previewCardEmail),valueInputLinkedin.addEventListener("keyup",previewCardLinkedin),valueInputGithub.addEventListener("keyup",previewCardGithub),getStorage(),btnReset.addEventListener("click",resetButton);