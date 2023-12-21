document.getElementById('issueInputForm').addEventListener('submit', saveIssue)



function fetchIssues(){
  let issues = JSON.parse(localStorage.getItem('issues'))
  let issuesList = document.getElementById('issuesList')

  issuesList.innerHTML = '';
  
  issues.forEach(issue => {
  let id = issue.id
  let subject = issue.subject
  let description = issue.description
  let severity = issue.severity
  let assignedTo = issue.assignedTo 
  let status = issue.status
  let statusColor = status == 'Closed' ? 'label-success' : 'label-info';

  
  issuesList.innerHTML += `
<div class="well">
<h6>Issue ID: ${id}</h6>
<p><span class="label ${statusColor}">${status}</span></p>
<h3>${subject}</h3>
<p>${description}</p>
<p><span class="glyphicon glyphicon-time"></span> ${severity} <span class="glyphicon glyphicon-user"></span>${assignedTo}</p>
<a href="#" class="btn btn-warning" onclick="setStatusClosed('${id}'); event.preventDefault();">Close</a>
<a href="#" class="btn btn-danger" onclick="deleteIssue('${id}'); event.preventDefault();">Delete</a>
</div>
`;
  })

    
}

  function saveIssue(event){
    let issueId = chance.guid()
    let issueSubject = document.getElementById('issueSubjInput').value
    let issueDescription = document.getElementById('issueDescInput').value
    let issueSeverity = document.getElementById('issueSeverityInput').value
    let issueAssignedTo = document.getElementById('issueAssignedToInput').value
    let issueStatus = 'Open'
  
    let issue = {
      id: issueId,
      subject: issueSubject,
      description: issueDescription,
      severity: issueSeverity,
      assignedTo: issueAssignedTo,
      status: issueStatus
    }
  

    let issues = JSON.parse(localStorage.getItem('issues'))
    if(issues == null){
      issues = []
    }
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))

    document.getElementById('issueInputForm').reset()

    fetchIssues()

    event.preventDefault()
l
     
      
}
