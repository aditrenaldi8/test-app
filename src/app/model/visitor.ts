export class Visitor {
  fullName: string;
  identityNumber: string;
  phone: string;
  birthDate: string;
  address: string;
  poli: Object;
  reason: string;
  complaint: string;
  printed: Boolean;
  timestamp: string

  constructor(data: any){
    this.fullName = data.fullName || ''
    this.identityNumber = data.identityNumber || ''
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