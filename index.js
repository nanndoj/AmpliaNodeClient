'use strict';
const { AmpliaClient } = require('./lib/amplia-client');
const { AmpliaError } = require('./lib/amplia-error');
const {
	BaseCertificate,
	Certificate,
	Name
} = require('./lib/certificate');
const {
	ArispCertificateParameters,
	ArispCartorioInfo,
	ArispEndereco,
	CertificateParameters,
	CieCertificateParameters,
	CieInstitution,
	CnbCertificateParameters,
	PkiBrazilCertificateParameters,
	SslCertificateParameters,
	CustomCertificateParameters,
} = require('./lib/certificate-parameters');
const { CertificateSummary } = require('./lib/certificate-summary');
const { CreateOrderRequest } = require('./lib/create-order-request');
const {
	CertificateKinds,
	CertificateFormats,
	ArispRoles,
	HeaderNames,
	QRCodeTypes,
	OrderStatus,
	PaginationOrders,
	AmpliaErrorCodes,
	HttpMethods
} = require('./lib/enums');
const { IssueCertificateRequest } = require('./lib/issue-certificate-request');
const {
	Order,
	BaseOrder
} = require('./lib/order');
const { OrderLocketError } = require('./lib/order-locket-error');
const { PaginatedSearchParams } = require('./lib/paginated-search-params');
const { PaginatedSearchResponse } = require('./lib/paginated-search-response');
const {
	CertificateQRCodeData,
	QRCodeData
} = require('./lib/qr-code-data');
const { QRCodeParser } = require('./lib/qr-code-parser');
const { RestBaseError } = require('./lib/rest-base-error');
const {
	Response,
	RestClient
} = require('./lib/rest-client');
const { RestError } = require('./lib/rest-error');
const { RestUnreachableError } = require('./lib/rest-unreachable-error');

exports.AmpliaClient = AmpliaClient;
exports.AmpliaError = AmpliaError;
exports.ArispCertificateParameters = ArispCertificateParameters;
exports.ArispCartorioInfo = ArispCartorioInfo;
exports.ArispEndereco = ArispEndereco;
exports.BaseCertificate = BaseCertificate;
exports.Certificate = Certificate;
exports.Name = Name;
exports.CertificateParameters = CertificateParameters;
exports.CieCertificateParameters = CieCertificateParameters;
exports.CieInstitution = CieInstitution;
exports.CnbCertificateParameters = CnbCertificateParameters;
exports.SslCertificateParameters = SslCertificateParameters;
exports.CustomCertificateParameters = CustomCertificateParameters;
exports.CertificateSummary = CertificateSummary;
exports.CreateOrderRequest = CreateOrderRequest;
exports.CertificateKinds = CertificateKinds;
exports.CertificateFormats = CertificateFormats;
exports.ArispRoles = ArispRoles;
exports.HeaderNames = HeaderNames;
exports.QRCodeTypes = QRCodeTypes;
exports.OrderStatus = OrderStatus;
exports.PaginationOrders = PaginationOrders;
exports.AmpliaErrorCodes = AmpliaErrorCodes;
exports.HttpMethods = HttpMethods;
exports.IssueCertificateRequest = IssueCertificateRequest;
exports.Order = Order;
exports.OrderLocketError = OrderLocketError;
exports.BaseOrder = BaseOrder;
exports.PaginatedSearchParams = PaginatedSearchParams;
exports.PaginatedSearchResponse = PaginatedSearchResponse;
exports.PkiBrazilCertificateParameters = PkiBrazilCertificateParameters;
exports.CertificateQRCodeData = CertificateQRCodeData;
exports.QRCodeData = QRCodeData;
exports.QRCodeParser = QRCodeParser;
exports.RestBaseError = RestBaseError;
exports.Response = Response;
exports.RestClient = RestClient;
exports.RestError = RestError;
exports.RestUnreachableError = RestUnreachableError;
