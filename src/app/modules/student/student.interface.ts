import { Schema, model, connect } from "mongoose";

type Gender = "male" | "female" | "other";

type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export type StudentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNo: string;
  motherOccupation: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  contactNo: string;
  occupation: string;
  address: string;
};

export type Student = {
  id: string;
  password: string;
  name: StudentName;
  gender: Gender;
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "block";
};
