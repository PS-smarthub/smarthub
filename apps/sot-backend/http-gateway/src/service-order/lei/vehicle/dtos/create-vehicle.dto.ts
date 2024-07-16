import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateVehicleDto {

    @IsNotEmpty()
    @IsString()
    automaker: string;

    @IsString()
    @IsNotEmpty()
    project: string;

    @IsString()
    @IsNotEmpty()
    responsible: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    chassis: string;

    @IsOptional()
    @IsString()
    fleet: string;

    @IsOptional()
    @IsString()
    comments: string;

    @IsOptional()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    nf_number: string;

    @IsString()
    @IsNotEmpty()
    @IsDateString()
    nf_emission_date: string;

    @IsString()
    @IsNotEmpty()
    @IsDateString()
    loan_maturity: string;

    @IsString()
    @IsNotEmpty()
    nf_archive_location: string;
}
