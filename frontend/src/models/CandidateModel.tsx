interface Candidate {
    _id: string;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    address: string;
    monthlyRevenues: string;
    job: string;
    situation: string;
    guarantor_ids: string;
}
  
export default Candidate;