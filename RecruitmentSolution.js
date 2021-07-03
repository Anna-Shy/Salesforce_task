class JavaScript {
    Submit_for_Approval(id) {
        return "Submit for approval Vacancy: " + id.getId();
    }

    Approve() {
        return "Approve Record: " + getId();
    }

    Reject() {
        return "Reject Record: " + getId();
    }
}


class Record extends JavaScript{
    id;
    type;

    Record(id, type) {
        this.id = id;
        this.type = type;
    }

    getId() {
        return this.id;
    }

    getType() {
        return this.type;
    }
}

const recordType = "Vacancy";

const softwareEngineerVacancy = new Record("SoftwareEngineer0001", recordType);
const frontEndEngineerVacancy = new Record("FrontEndEngineer0020", recordType);

console.log(softwareEngineerVacancy.Submit_for_Approval);
console.log(softwareEngineerVacancy.Approve);

console.log(frontEndEngineerVacancy.Submit_for_Approval);
console.log(frontEndEngineerVacancy.Reject);