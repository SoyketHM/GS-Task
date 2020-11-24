import { Meteor } from 'meteor/meteor';
import { Students } from '../imports/collections/students';
import { Subjects } from '../imports/collections/subjects';
import { assert } from 'chai';

let studentId, subjectId;

if (Meteor.isServer) {

    describe('Students test cases', () => {
        
        describe('methods', () => {
            beforeEach(() => {
                Students.remove({});
            });
            it('can delete all students', () => {
                assert.equal(Students.find().count(), 0);
            });
        });

        describe('insert student', () => {
            beforeEach(() => {
                subjectId = Subjects.insert({
                    name: 'Bangla',
                    students: [],
                    createdAt: new Date(),
                })

                studentId = Students.insert({
                    dob: "1994-01-26",
                    name: "Belayet",
                    email: "belayet@gmail.com",
                    phone: "12345677890",
                    subjects: [subjectId],
                    createdAt: new Date(),
                });
            });
            it('can create student', () => {
                assert.equal(Students.find().count(), 1);
            });
        });

        describe('update student', () => {
            beforeEach(() => {
                subjectId = Subjects.insert({
                    name: 'English',
                    students: [],
                    createdAt: new Date(),
                })

                Students.update(studentId, {
                    $set: {
                        dob: "1994-01-26",
                        name: "Belayet Hossain",
                        email: "belayet@gmail.com",
                        phone: "12345677890",
                        subjects: [subjectId],
                        updatedAt: new Date(),
                    },
                });
            });

            it('can update student', () => {
                let student = Students.findOne( {_id: studentId} );
                assert.equal(student.name, 'Belayet Hossain');
            });
        });

        describe('delete student', () => {
            beforeEach(() => {
                Students.remove(studentId);
            });
            it('can delete student', () => {
                assert.equal(Students.find().count(), 0);
            });
        });
    });
}