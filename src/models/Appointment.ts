import { v4 as uuidv4 } from 'uuid';

interface AppointmentConstructor {
    provider: string;
    date: Date;
}

class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = uuidv4();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
