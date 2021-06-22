// credit: number;
interface MajorCredits {
    credits: number;
    _brand: 'major';
}

interface MinorCredits {
    credits: number;
    _brand: 'minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
};

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
