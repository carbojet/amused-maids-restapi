"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = exports.ParmanentAddress = exports.PresentAddress = exports.Latlogn = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var Latlogn = /** @class */ (function () {
    function Latlogn() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], Latlogn.prototype, "lat");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], Latlogn.prototype, "long");
    return Latlogn;
}());
exports.Latlogn = Latlogn;
var PresentAddress = /** @class */ (function () {
    function PresentAddress() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], PresentAddress.prototype, "address");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], PresentAddress.prototype, "city");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], PresentAddress.prototype, "state");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], PresentAddress.prototype, "zipcode");
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, swagger_1.ApiProperty)({ type: Latlogn, required: false, "default": Latlogn }),
        (0, class_transformer_1.Type)(function () { return Latlogn; })
    ], PresentAddress.prototype, "latlong");
    return PresentAddress;
}());
exports.PresentAddress = PresentAddress;
var ParmanentAddress = /** @class */ (function () {
    function ParmanentAddress() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], ParmanentAddress.prototype, "address");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], ParmanentAddress.prototype, "city");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], ParmanentAddress.prototype, "state");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], ParmanentAddress.prototype, "zipcode");
    return ParmanentAddress;
}());
exports.ParmanentAddress = ParmanentAddress;
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
        this.emailVerified = true;
        /*
        @IsString()
        @ApiProperty({ required: false, default: '' })
        password: string;
      
        @IsString()
        @ApiProperty({ required: true, default: '' })
        role: string;
      
        @IsObject()
        @Type(() => ParmanentAddress)
        @ApiProperty({
          type: ParmanentAddress,
          required: false,
          default: {
            address: '',
            city: '',
            state: '',
            zipcode: '',
          },
        })
        parmanentAddress: ParmanentAddress;
      
        @IsObject()
        @Type(() => PresentAddress)
        @ApiProperty({
          type: PresentAddress,
          required: false,
          default: {
            address: '',
            city: '',
            state: '',
            zipcode: '',
          },
        })
        presentAddress: PresentAddress;
      
        @IsBoolean()
        @ApiProperty({ required: false, default: false })
        userVerified: boolean;
      
        @IsBoolean()
        @ApiProperty({ required: false, default: false })
        live: boolean;
      
        @IsBoolean()
        @ApiProperty({ required: false, default: false })
        onDuty: boolean;
      
        @IsString()
        @ApiProperty({ required: false, default: '' })
        userStatus: string;
        */
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)({ required: true })
    ], CreateUserDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": false })
    ], CreateUserDto.prototype, "phoneVerified");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": '' })
    ], CreateUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)({ required: false, "default": false })
    ], CreateUserDto.prototype, "emailVerified");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
