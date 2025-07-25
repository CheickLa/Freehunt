import {
  IsString,
  IsEnum,
  IsBoolean,
  IsUUID,
  IsArray,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { JobPostingLocation } from '@prisma/client';

export class CreateJobPostingDto {
  @IsString()
  @ApiProperty({
    description: 'The title of the job posting',
    example: 'SEO Optimization Specialist',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'The description of the job posting',
    example:
      "We are looking for an SEO Optimization Specialist to improve our website's search engine rankings.",
  })
  description: string;

  @IsEnum(JobPostingLocation)
  @ApiProperty({
    description: 'The location of the job posting',
    example: 'ONSITE',
  })
  location: JobPostingLocation;

  @IsBoolean()
  @ApiProperty({
    description: 'Whether the job posting is promoted or not',
    example: false,
  })
  isPromoted: boolean;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: 'The average daily rate for the job posting',
    example: 500,
  })
  averageDailyRate: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: 'The seniority level required for the job posting (in years)',
    example: 5,
  })
  seniority: number;

  @IsUUID()
  @ApiProperty({
    description:
      'The unique identifier for the company associated with the job posting',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  companyId: string;

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Array of skill IDs to associate with the job posting',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440001',
    ],
    required: false,
  })
  skillIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Array of checkpoint IDs to associate with the job posting',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440001',
    ],
    required: false,
  })
  checkpointIds?: string[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty({
    description:
      'The total amount for the job posting (calculated as TJM × working days)',
    example: 5000,
    required: false,
  })
  totalAmount?: number;
}
