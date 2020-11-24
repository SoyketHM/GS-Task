import { Meteor } from 'meteor/meteor';
import { Students } from '../imports/collections/students';
import { Subjects } from '../imports/collections/subjects';
import { assert } from 'chai';

let subjectId, studentId;
if (Meteor.isServer) {
    describe('Subjects test cases', () => {
        describe('delete all subjects', () => {
            beforeEach(() => {
                Subjects.remove({});
            });
            it('can delete owned subject', () => {
                assert.equal(Subjects.find().count(), 0);
            });
        });

        describe('insert subject', () => {
            beforeEach(() => {
                studentId = Students.insert({
                    dob: "1994-01-26",
                    name: "Belayet",
                    email: "belayet@gmail.com",
                    phone: "12345677890",
                    Students: [subjectId],
                    createdAt: new Date(),
                });

                subjectId = Subjects.insert({
                    name: 'Bangla',
                    students: [studentId],
                    createdAt: new Date(),
                });
            });
            it('can create subject', () => {
                assert.equal(Subjects.find().count(), 1);
            });
        });

        describe('update subject', () => {
            beforeEach(() => {
                let studentId1 = Students.insert({
                    dob: "1994-01-26",
                    name: "Belayet",
                    email: "belayet@gmail.com",
                    phone: "12345677890",
                    Students: [subjectId],
                    createdAt: new Date(),
                });

                let studentId2 = Students.insert({
                    dob: "1994-01-26",
                    name: "Someone",
                    email: "someone@gmail.com",
                    phone: "12345677890",
                    Students: [subjectId],
                    createdAt: new Date(),
                });

                Subjects.update(subjectId, {
                    $set: {
                        name: 'English',
                        students: [studentId1, studentId2],
                        updatedAt: new Date(),
                    },
                  });
            });
            it('can update subject', () => {
                let subject = Subjects.findOne( {_id: subjectId} );
                assert.equal(subject.name, 'English');
                assert.equal(subject.students.length, 2);
            });
        });

        describe('delete subject', () => {
            beforeEach(() => {
                Subjects.remove(subjectId);
            });
            it('can delete subject', () => {
                assert.equal(Subjects.find().count(), 0);
            });
        });
    });
}