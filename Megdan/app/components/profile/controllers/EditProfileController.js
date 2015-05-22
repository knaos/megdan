'use strict';

app.controller('EditProfileController', function ($rootScope, $scope, $location, profileService, notifyService, authenticationService) {

    profileService.getDataAboutMe(
        function (data) {
            $scope.profileData = data;
        },
        function (err) {
            notifyService.showError('Could not load profile data', err);
        }
    );

    $scope.deleteProfileImage = function() {
        $scope.profileData.profileImageData = null;
        $scope.profileData.changeImage = true;
    };

    $scope.deleteCoverImage = function() {
        $scope.profileData.coverImageData = null;
        $scope.profileData.changeImage = true;
    };

    $scope.fileSelectedCover = function(fileInputField) {
        $scope.deleteCoverImage();
        delete $scope.profileData.coverImageData;

        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.profileData.coverImageData = reader.result;
                $(".cover-preview").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".cover-preview").html("<p>File type not supported!</p>");
        }
    };

    $scope.fileSelectedProfile = function(fileInputField) {
        $scope.deleteProfileImage();
        delete $scope.profileData.profileImageData;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.profileData.profileImageData = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.uploadCoverPicture = function () {
        //TODO
    };

    $scope.uploadProfilePicture = function () {

    };

    $scope.updateProfile = function () {
        profileService.editProfile($scope.profileData,
            function (data) {
            notifyService.showInfo(data.message);
            $location.path('/');
                //An event called to refresh all data about the usser
            $rootScope.$broadcast('ProfileEdited');
        },
            function (err) {
                notifyService.showError('Could not edit profile', err);
            })
    };
});