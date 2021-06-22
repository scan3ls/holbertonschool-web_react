interface MajorCredits {
    credit: number;
    majorBrand: any;
}

interface MinorCredits {
    credit: number;
    minorBrand: any;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return subject1.credit + subject2.credit;
};

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return subject1.credit + subject2.credit;
}
