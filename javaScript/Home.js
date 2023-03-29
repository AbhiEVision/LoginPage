$(document).ready(() => {

    RemoveValidationFormSession();
    UpdateUserNameInPage();

    

    $("#edit-profile").click(() => {
        ShowEditForm();
    });

   
   
    

   

    $(".close-form").click(CloseForm);

    $("#removeImage").click(SetDefaultImage);

    $(".toast > div > button").click(() => {
        $('.toast').removeClass('show');
        $('.toast').removeClass('hide');
    })
})



function ShowEditForm() {
    FillForn();
    $("#main-section").addClass("blur");
    $("#edit-profile-form").removeClass("hide");
    $("#upload-image-section").addClass('hide');
}

function ShowImageSection(){
    FillImage();
    $("#main-section").addClass("blur");
    $("#edit-profile-form").addClass("hide");
    $("#upload-image-section").removeClass('hide');
}

function FillForn() {
    const data = GetCurrentUserData();
    $("#Username").val(data.username);
    $("#E-mail").val(data.email);
    $("#Password").val(data.password);
    $("#BDdate").val(data.bddate);
    if (data.gender == "Male") {
        $("#radio1").attr("checked", true);
    } else {
        $("#radio2").attr("checked", true);
    }
}



function CloseForm() {
    $("#main-section").removeClass("blur");
    $("#edit-profile-form").addClass("hide");
    $("#upload-image-section").addClass("hide");
    ClearForm();
}

function ClearForm() {
    $("#E-mail").val(null);
    $("#Username").val(null);
    $("#Password").val(null);
    $("#BDdate").val(null);
    $("#edit-profile-form input[type='radio']:checked").prop('checked', false);
    $("#profile-pic-preview").attr("src", "");
    $("#ImageUploadHere").val(null);
}





function ShowToastWithMessag(msg) {
    console.log(msg);
    $(".toast-body").html(msg);
    $(".toast").addClass("show");
}
