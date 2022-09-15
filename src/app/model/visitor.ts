export class Visitor {
  fullName: string;
  IdentityNumber: string;
  phone: string;
  birthDate: string;
  address: string;
  poli: Object;
  reason: string;
  complaint: string;
  printed: Boolean;
  timestamp: String

  constructor(data: any){
    this.fullName = data.fullName || ''
    this.IdentityNumber = data.IdentityNumber || ''
    this.phone = data.phone || ''
    this.birthDate = data.birthDate || ''
    this.address = data.address || ''
    this.poli = data.poli || ''
    this.reason = data.reason || ''
    this.complaint = data.complaint || ''
    this.printed = false
    this.timestamp = data.timestamp || ''
  }
}