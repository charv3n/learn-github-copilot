function skillsMember(){
    var skillMember = document.getElementById("skillMember");
    var skillMemberValue = skillMember.options[skillMember.selectedIndex].value;
    var skillMemberText = skillMember.options[skillMember.selectedIndex].text;
    var skillMemberList = document.getElementById("skillMemberList");
    var skillMemberOption = document.createElement("option");
    skillMemberOption.text = skillMemberText;
    skillMemberOption.value = skillMemberValue;
    skillMemberList.add(skillMemberOption);
    skillMember.remove(skillMember.selectedIndex);
}
