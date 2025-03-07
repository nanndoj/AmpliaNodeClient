'use strict';
const { ArispRoles, CertificateFormats } = require('./enums');

class CertificateParameters {

	constructor({ format } = {}) {
		this._format = format || null;
	}

	//region "format" Accessors

	getFormat() {
		return this._format;
	}

	get format() {
		return this._format;
	}

	//endregion

	static encode(parameters) {
		return JSON.stringify(parameters);
	}

	static decodeJson(json) {
		let model = null;
		try {
			model = JSON.parse(json);
		} catch (err) {
			throw `Invalid template parameters JSON: ${err}`;
		}
		CertificateParameters.decode(model);
	}

	static decode({ format, ...model }) {

		if (!format) {
			throw 'Missing format field';
		}

		switch (format) {
			case CertificateFormats.PKI_BRAZIL:
				return new PkiBrazilCertificateParameters(model);
			case CertificateFormats.SSL:
				return new SslCertificateParameters(model);
			case CertificateFormats.CNB:
				return new CnbCertificateParameters(model);
			case CertificateFormats.CIE:
				return new CieCertificateParameters(model);
			case CertificateFormats.ARISP:
				return new ArispCertificateParameters(model);
			case CertificateFormats.CUSTOM:
				return new CustomCertificateParameters(model);
			default:
				throw `Certificate "format" field not supported on model for CertificateParameters: ${format}`;
		}
	}

	toModel() {
		if (!this._format) {
			throw new Error('The "format" field was not set');
		}

		return {
			format: this._format
		};
	}
}

class PkiBrazilCertificateParameters extends CertificateParameters {

	constructor(
		{
			name,
			emailAddress,
			cnpj,
			companyName,
			cpf,
			birthDate,
			oabUF,
			oabNumero,
			rgEmissor,
			rgEmissorUF,
			rgNumero,
			organizationUnits,
			organization,
			country,
			phoneNumber
		} = {}
	) {
		super();
		this._format = CertificateFormats.PKI_BRAZIL;

		this._name = name || null;
		this._emailAddress = emailAddress || null;
		this._cnpj = cnpj || null;
		this._companyName = companyName || null;
		this._cpf = cpf || null;
		this._birthDate = birthDate || null;
		this._oabUF = oabUF || null;
		this._oabNumero = oabNumero || null;
		this._rgEmissor = rgEmissor || null;
		this._rgEmissorUF = rgEmissorUF || null;
		this._rgNumero = rgNumero || null;
		this._organizationUnits = organizationUnits || null;
		this._organization = organization || null;
		this._country = country || null;
		this._phoneNumber = phoneNumber || null;
	}

	//region "name" Accessors

	getName() {
		return this._name;
	}

	get name() {
		return this._name;
	}

	setName(value) {
		this._name = value;
	}

	set name(value) {
		this._name = value;
	}

	//endregion

	//region "emailAddress" Accessors

	getEmailAddress() {
		return this._emailAddress;
	}

	get emailAddress() {
		return this._emailAddress;
	}

	setEmailAddress(value) {
		this._emailAddress = value;
	}

	set emailAddress(value) {
		this._emailAddress = value;
	}

	//endregion

	//region "cnpj" Accessors

	getCnpj() {
		return this._cnpj;
	}

	get cnpj() {
		return this._cnpj;
	}

	setCnpj(value) {
		this._cnpj = value;
	}

	set cnpj(value) {
		this._cnpj = value;
	}

	//endregion

	//region "companyName" Accessors

	getCompanyName() {
		return this._companyName;
	}

	get companyName() {
		return this._companyName;
	}

	setCompanyName(value) {
		this._companyName = value;
	}

	set companyName(value) {
		this._companyName = value;
	}

	//endregion

	//region "cpf" Accessors

	getCpf() {
		return this._cpf;
	}

	get cpf() {
		return this._cpf;
	}

	setCpf(value) {
		this._cpf = value;
	}

	set cpf(value) {
		this._cpf = value;
	}

	//endregion

	//region "birthDate" Accessors

	getBirthDate() {
		return this._birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	setBirthDate(value) {
		this._birthDate = value;
	}

	set birthDate(value) {
		this._birthDate = value;
	}

	//endregion

	//region "oabUF" Accessors

	getOabUF() {
		return this._oabUF;
	}

	get oabUF() {
		return this._oabUF;
	}

	setOabUF(value) {
		this._oabUF = value;
	}

	set oabUF(value) {
		this._oabUF = value;
	}

	//endregion

	//region "oabNumero" Accessors

	getOabNumero() {
		return this._oabNumero;
	}

	get oabNumero() {
		return this._oabNumero;
	}

	setOabNumero(value) {
		this._oabNumero = value;
	}

	set oabNumero(value) {
		this._oabNumero = value;
	}

	//endregion

	//region "rgEmissor" Accessors

	getRGEmissor() {
		return this._rgEmissor;
	}

	get rgEmissor() {
		return this._rgEmissor;
	}

	setRGEmissor(value) {
		this._rgEmissor = value;
	}

	set rgEmissor(value) {
		this._rgEmissor = value;
	}

	//endregion

	//region "rgEmissorUF" Accessors

	getRGEmissorUF() {
		return this._rgEmissorUF;
	}

	get rgEmissorUF() {
		return this._rgEmissorUF;
	}

	setRGEmissorUF(value) {
		this._rgEmissorUF = value;
	}

	set rgEmissorUF(value) {
		this._rgEmissorUF = value;
	}

	//endregion

	//region "rgNumero" Accessors

	getRGNumero() {
		return this._rgNumero;
	}

	get rgNumero() {
		return this._rgNumero;
	}

	setRGNumero(value) {
		this._rgNumero = value;
	}

	set rgNumero(value) {
		this._rgNumero = value;
	}

	//endregion

	//region "organizationUnits" Accessors

	getOrganizationUnits() {
		return this._organizationUnits;
	}

	get organizationUnits() {
		return this._organizationUnits;
	}

	setOrganizationUnits(value) {
		this._organizationUnits = value;
	}

	set organizationUnits(value) {
		this._organizationUnits = value;
	}

	//endregion

	//region "organization" Accessors

	getOrganization() {
		return this._organization;
	}

	get organization() {
		return this._organization;
	}

	setOrganization(value) {
		this._organization = value;
	}

	set organization(value) {
		this._organization = value;
	}

	//endregion

	//region "country" Accessors

	getCountry() {
		return this._country;
	}

	get country() {
		return this._country;
	}

	setCountry(value) {
		this._country = value;
	}

	set country(value) {
		this._country = value;
	}

	//endregion

	//region "phoneNumber" Accessors

	getPhoneNumber() {
		return this._phoneNumber;
	}

	get phoneNumber() {
		return this._phoneNumber;
	}

	setPhoneNumber(value) {
		this._phoneNumber = value;
	}

	set phoneNumber(value) {
		this._phoneNumber = value;
	}

	//endregion

	toModel() {
		if (!this._name) {
			throw new Error('The "name" field was not set');
		}
		if (!this._cpf) {
			throw new Error('The "cpf" field was not set');
		}

		let model = super.toModel();
		model['name'] = this._name;
		model['emailAddress'] = this._emailAddress;
		model['cnpj'] = this._cnpj;
		model['companyName'] = this._companyName;
		model['cpf'] = this._cpf;
		model['birthDate'] = this._birthDate;
		model['oabUF'] = this._oabUF;
		model['oabNumero'] = this._oabNumero;
		model['rgEmissor'] = this._rgEmissor;
		model['rgEmissorUF'] = this._rgEmissorUF;
		model['rgNumero'] = this._rgNumero;
		model['organizationUnits'] = this._organizationUnits;
		model['organization'] = this._organization;
		model['country'] = this._country;
		model['phoneNumber'] = this._phoneNumber;
		return model;
	}
}

class ArispCertificateParameters extends CertificateParameters {

	constructor({ nome, cpf, funcao, cartorio } = {}) {
		super();
		this._format = CertificateFormats.ARISP;

		this._nome = nome || null;
		this._cpf = cpf || null;
		this._funcao = funcao || null;
		this._cartorio = null;

		if (cartorio) {
			this._cartorio = new ArispCartorioInfo(cartorio);
		}
	}

	//region "nome" Accessors

	getNome() {
		return this._nome;
	}

	get nome() {
		return this._nome;
	}

	setNome(value) {
		this._nome = value;
	}

	set nome(value) {
		this._nome = value;
	}

	//endregion

	//region "cpf" Accessors

	getCpf() {
		return this._cpf;
	}

	get cpf() {
		return this._cpf;
	}

	setCpf(value) {
		this._cpf = value;
	}

	set cpf(value) {
		this._cpf = value;
	}

	//endregion

	//region "funcao" Accessors

	getFuncao() {
		return this._funcao;
	}

	get funcao() {
		return this._funcao;
	}

	setFuncao(value) {
		this._funcao = value;
	}

	set funcao(value) {
		this._funcao = value;
	}

	//endregion

	//region "cartorio" Accessors

	getCartorio() {
		return this._cartorio;
	}

	get cartorio() {
		return this._cartorio;
	}

	setCartorio(value) {
		this._cartorio = value;
	}

	set cartorio(value) {
		this._cartorio = value;
	}

	//endregion

	toModel() {
		if (!this._nome) {
			throw new Error('The "nome" field was not set');
		}
		if (!this._cpf) {
			throw new Error('The "cpf" field was not set');
		}
		if (!this._cartorio) {
			throw new Error('The "cartorio" field was not set');
		}

		if (this._funcao) {
			switch (this._funcao) {
				case ArispRoles.TABELIAO:
				case ArispRoles.SUBSTITUTO:
				case ArispRoles.ESCREVENTE:
					break;
				default:
					throw new Error(`Unsupported "funcao" field on model for ArispCertificateParameters: ${this._funcao}`);
			}
		}

		if (this._cartorio && !(this._cartorio instanceof ArispCartorioInfo)) {
			throw new Error(`Unsupported type for "cartorio" field on model for ArispCertificateParameters: ${typeof(this._cartorio)}`);
		}

		let model = super.toModel();
		model['nome'] = this._nome;
		model['cpf'] = this._cpf;
		model['funcao'] = this._funcao || 0;
		model['cartorio'] = this._cartorio ? this._cartorio.toModel() : null;
		return model;
	}
}

class ArispCartorioInfo {

	constructor({ cns, numero, nome, oficial, endereco, telefone, site, email } = {}) {
		this._cns = cns || null;
		this._numero = numero || null;
		this._nome = nome || null;
		this._oficial = oficial || null;
		this._endereco = null;
		this._telefone = telefone || null;
		this._site = site || null;
		this._email = email || null;

		if (endereco) {
			this._endereco = new ArispEndereco(endereco);
		}
	}

	//region "cns" Accessors

	getCns() {
		return this._cns;
	}

	get cns() {
		return this._cns;
	}

	setCns(value) {
		this._cns = value;
	}

	set cns(value) {
		this._cns = value;
	}

	//endregion

	//region "numero" Accessors

	getNumero() {
		return this._numero;
	}

	get numero() {
		return this._numero;
	}

	setNumero(value) {
		this._numero = value;
	}

	set numero(value) {
		this._numero = value;
	}

	//endregion

	//region "nome" Accessors

	getNome() {
		return this._nome;
	}

	get nome() {
		return this._nome;
	}

	setNome(value) {
		this._nome = value;
	}

	set nome(value) {
		this._nome = value;
	}

	//endregion

	//region "oficial" Accessors

	getOficial() {
		return this._oficial;
	}

	get oficial() {
		return this._oficial;
	}

	setOficial(value) {
		this._oficial = value;
	}

	set oficial(value) {
		this._oficial = value;
	}

	//endregion

	//region "endereco" Accessors

	getEndereco() {
		return this._endereco;
	}

	get endereco() {
		return this._endereco;
	}

	setEndereco(value) {
		this._endereco = value;
	}

	set endereco(value) {
		this._endereco = value;
	}

	//endregion

	//region "telefone" Accessors

	getTelefone() {
		return this._telefone;
	}

	get telefone() {
		return this._telefone;
	}

	setTelefone(value) {
		this._telefone = value;
	}

	set telefone(value) {
		this._telefone = value;
	}

	//endregion

	//region "site" Accessors

	getSite() {
		return this._site;
	}

	get site() {
		return this._site;
	}

	setSite(value) {
		this._site = value;
	}

	set site(value) {
		this._site = value;
	}

	//endregion

	//region "email" Accessors

	getEmail() {
		return this._email;
	}

	get email() {
		return this._email;
	}

	setEmail(value) {
		this._email = value;
	}

	set email(value) {
		this._email = value;
	}

	//endregion

	toModel() {
		if (!this._cns) {
			throw new Error('The "cns" field is not set');
		}
		if (!this._nome) {
			throw new Error('The "nome" field is not set');
		}
		if (!this._oficial) {
			throw new Error('The "oficial" field is not set');
		}

		if (this._endereco && !(this._endereco instanceof ArispEndereco)) {
			throw new Error(`Unsupported type for "endereco" field on model for ArispCartorioInfo: ${typeof(this._endereco)}`);
		}

		return {
			cns: this._cns,
			numero: this._numero,
			nome: this._nome,
			oficial: this._oficial,
			endereco: this._endereco ? this._endereco.toModel() : null,
			telefone: this._telefone,
			site: this._site,
			email: this._email
		};
	}
}

class ArispEndereco {

	constructor({ logradouro, numero, complemento, distrito, comarca, municipio, estado, cep } = {}) {
		this._logradouro = logradouro || null;
		this._numero = numero || null;
		this._complemento = complemento || null;
		this._distrito = distrito || null;
		this._comarca = comarca || null;
		this._municipio = municipio || null;
		this._estado = estado || null;
		this._cep = cep || null;
	}

	//region "logradouro" Accessors

	getLogradouro() {
		return this._logradouro;
	}

	get logradouro() {
		return this._logradouro;
	}

	setLogradouro(value) {
		this._logradouro = value;
	}

	set logradouro(value) {
		this._logradouro = value;
	}

	//endregion

	//region "numero" Accessors

	getNumero() {
		return this._numero;
	}

	get numero() {
		return this._numero;
	}

	setNumero(value) {
		this._numero = value;
	}

	set numero(value) {
		this._numero = value;
	}

	//endregion

	//region "complemento" Accessors

	getComplemento() {
		return this._complemento;
	}

	get complemento() {
		return this._complemento;
	}

	setComplemento(value) {
		this._complemento = value;
	}

	set complemento(value) {
		this._complemento = value;
	}

	//endregion

	//region "distrito" Accessors

	getDistrito() {
		return this._distrito;
	}

	get distrito() {
		return this._distrito;
	}

	setDistrito(value) {
		this._distrito = value;
	}

	set distrito(value) {
		this._distrito = value;
	}

	//endregion

	//region "comarca" Accessors

	getComarca() {
		return this._comarca;
	}

	get comarca() {
		return this._comarca;
	}

	setComarca(value) {
		this._comarca = value;
	}

	set comarca(value) {
		this._comarca = value;
	}

	//endregion

	//region "municipio" Accessors

	getMunicipio() {
		return this._municipio;
	}

	get municipio() {
		return this._municipio;
	}

	setMunicipio(value) {
		this._municipio = value;
	}

	set municipio(value) {
		this._municipio = value;
	}

	//endregion

	//region "estado" Accessors

	getEstado() {
		return this._estado;
	}

	get estado() {
		return this._estado;
	}

	setEstado(value) {
		this._estado = value;
	}

	set estado(value) {
		this._estado = value;
	}

	//endregion

	//region "cep" Accessors

	getCep() {
		return this._cep;
	}

	get cep() {
		return this._cep;
	}

	setCep(value) {
		this._cep = value;
	}

	set cep(value) {
		this._cep = value;
	}

	//endregion

	toModel() {
		if (!this._logradouro) {
			throw new Error('The "logradouro" field was not set');
		}
		if (!this._municipio) {
			throw new Error('The "municipio" field was not set');
		}
		if (!this._estado) {
			throw new Error('The "estado" field was not set');
		}

		const supportedEstado = /^AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO$/;
		if (!supportedEstado.test(this._estado)) {
			throw `Unsupported "estado" field: ${this._estado}`;
		}

		return {
			logradouro: this._logradouro,
			numero: this._numero,
			complemento: this._complemento,
			distrito: this._distrito,
			comarca: this._comarca,
			municipio: this._municipio,
			estado: this._estado,
			cep: this._cep
		};
	}
}

class CieCertificateParameters extends CertificateParameters {

	constructor(
		{
			name,
			eea,
			birthDate,
			cpf,
			registrationNumber,
			idNumber,
			idIssuer,
			idIssuerState,
			institution,
			degree,
			course
		} = {}
	) {
		super();
		this._format = CertificateFormats.CIE;

		this._name = name || null;
		this._eea = eea || null;
		this._birthDate = birthDate || null;
		this._cpf = cpf || null;
		this._registrationNumber = registrationNumber || null;
		this._idNumber = idNumber || null;
		this._idIssuer = idIssuer || null;
		this._idIssuerState = idIssuerState || null;
		this._institution = null;
		this._degree = degree || null;
		this._course = course || null;

		if (institution) {
			this._institution = new CieInstitution(institution);
		}
	}

	//region "name" Accessors

	getName() {
		return this._name;
	}

	get name() {
		return this._name;
	}

	setName(value) {
		this._name = value;
	}

	set name(value) {
		this._name = value;
	}

	//endregion

	//region "eea" Accessors

	getEEA() {
		return this._eea;
	}

	get eea() {
		return this._eea;
	}

	setEEA(value) {
		this._eea = value;
	}

	set eea(value) {
		this._eea = value;
	}

	//endregion

	//region "birthDate" Accessors

	getBirthDate() {
		return this._birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	setBirthDate(value) {
		this._birthDate = value;
	}

	set birthDate(value) {
		this._birthDate = value;
	}

	//endregion

	//region "cpf" Accessors

	getCpf() {
		return this._cpf;
	}

	get cpf() {
		return this._cpf;
	}

	setCpf(value) {
		this._cpf = value;
	}

	set cpf(value) {
		this._cpf = value;
	}

	//endregion

	//region "registrationNumber" Accessors

	getRegistrationNumber() {
		return this._registrationNumber;
	}

	get registrationNumber() {
		return this._registrationNumber;
	}

	setRegistrationNumber(value) {
		this._registrationNumber = value;
	}

	set registrationNumber(value) {
		this._registrationNumber = value;
	}

	//endregion

	//region "idNumber" Accessors

	getIdNumber() {
		return this._idNumber;
	}

	get idNumber() {
		return this._idNumber;
	}

	setIdNumber(value) {
		this._idNumber = value;
	}

	set idNumber(value) {
		this._idNumber = value;
	}

	//endregion

	//region "idIssuer" Accessors

	getIdIssuer() {
		return this._idIssuer;
	}

	get idIssuer() {
		return this._idIssuer;
	}

	setIdIssuer(value) {
		this._idIssuer = value;
	}

	set idIssuer(value) {
		this._idIssuer = value;
	}

	//endregion

	//region "idIssuerState" Accessors

	getIdIssuerState() {
		return this._idIssuerState;
	}

	get idIssuerState() {
		return this._idIssuerState;
	}

	setIdIssuerState(value) {
		this._idIssuerState = value;
	}

	set idIssuerState(value) {
		this._idIssuerState = value;
	}

	//endregion

	//region "institution" Accessors

	getInstitution() {
		return this._institution;
	}

	get institution() {
		return this._institution;
	}

	setInstitution(value) {
		this._institution = value;
	}

	set institution(value) {
		this._institution = value;
	}

	//endregion

	//region "degree" Accessors

	getDegree() {
		return this._degree;
	}

	get degree() {
		return this._degree;
	}

	setDegree(value) {
		this._degree = value;
	}

	set degree(value) {
		this._degree = value;
	}

	//endregion

	//region "course" Accessors

	getCourse() {
		return this._course;
	}

	get course() {
		return this._course;
	}

	setCourse(value) {
		this._course = value;
	}

	set course(value) {
		this._course = value;
	}

	//endregion

	toModel() {
		if (!this._name) {
			throw new Error('The "name" field was not set');
		}
		if (!this._registrationNumber) {
			throw new Error('The "registrationNumber" field was not set');
		}
		if (!this._degree) {
			throw new Error('The "degree" field was not set');
		}
		if (!this._course) {
			throw new Error('The "course" field was not set');
		}

		if (this._institution && !(this._institution instanceof CieInstitution)) {
			throw new Error(`Unsupported type for "institution" field on model for CieCertificateParameters: ${typeof(this._institution)}`);
		}

		let model = super.toModel();
		model['name'] = this._name;
		model['eea'] = this._eea;
		model['birthDate'] = this._birthDate;
		model['cpf'] = this._cpf;
		model['registrationNumber'] = this._registrationNumber;
		model['idNumber'] = this._idNumber;
		model['idIssuer'] = this._idIssuer;
		model['idIssuerState'] = this._idIssuerState;
		model['institution'] = this._institution ? this._institution.toModel() : null;
		model['degree'] = this._degree;
		model['course'] = this._course;
		return model;
	}
}

class CieInstitution {

	constructor({ name, city, state } = {}) {
		this._name = name || null;
		this._city = city || null;
		this._state = state || null;
	}

	//region "name" Accessors

	getName() {
		return this._name;
	}

	get name() {
		return this._name;
	}

	setName(value) {
		this._name = value;
	}

	set name(value) {
		this._name = value;
	}

	//endregion

	//region "city" Accessors

	getCity() {
		return this._city;
	}

	get city() {
		return this._city;
	}

	setCity(value) {
		this._city = value;
	}

	set city(value) {
		this._city = value;
	}

	//endregion

	//region "state" Accessors

	getState() {
		return this._state;
	}

	get state() {
		return this._state;
	}

	setState(value) {
		this._state = value;
	}

	set state(value) {
		this._state = value;
	}

	//endregion

	toModel() {
		if (!this._name) {
			throw new Error('The "name" field was not set');
		}
		if (!this._city) {
			throw new Error('The "city" field was not set');
		}
		if (!this._state) {
			throw new Error('The "state" field was not set');
		}

		return {
			name: this._name,
			city: this._city,
			state: this._state
		};
	}
}

class CnbCertificateParameters extends PkiBrazilCertificateParameters {

	constructor(model) {
		super(model);
		this._format = CertificateFormats.CNB;
	}
}

class SslCertificateParameters extends CertificateParameters {

	constructor({ dnsNames } = {}) {
		super();
		this._format = CertificateFormats.SSL;

		this._dnsNames = dnsNames || null;
	}

	//region "dnsNames" Accessors

	getDnsNames() {
		return this._dnsNames;
	}

	get dnsNames() {
		return this._dnsNames;
	}

	setDnsNames(value) {
		this._dnsNames = value;
	}

	set dnsNames(value) {
		this._dnsNames = value;
	}

	//endregion

	toModel() {
		let model = super.toModel();
		model['dnsNames'] = this._dnsNames;
		return model;
	}
}

class CustomCertificateParameters extends CertificateParameters {

	constructor(
		{
			country,
            organization,
            organizationUnit,
            dnQualifier,
            stateName,
            commonName,
            serialNumber,
            locality,
            title,
            surname,
            givenName,
            initials,
            pseudonym,
            generationQualifier,
            emailAddress,
            allValues
		} = {}
	) {
		super();
		this._format = CertificateFormats.CUSTOM;

		this._country = country || null;
		this._organization = organization || null;
		this._organizationUnit = organizationUnit || null;
		this._dnQualifier = dnQualifier || null;
		this._stateName = stateName || null;
		this._commonName = commonName || null;
		this._serialNumber = serialNumber || null;
		this._locality = locality || null;
		this._title = title || null;
		this._surname = surname || null;
		this._givenName = givenName || null;
		this._initials = initials || null;
		this._pseudonym = pseudonym || null;
		this._generationQualifier = generationQualifier || null;
		this._emailAddress = emailAddress || null;
		this._allValues = allValues || null;
	}

	//region "country" Accessors

	getCountry() {
		return this._country;
	}

	get country() {
		return this._country;
	}

	setCountry(value) {
		this._country = value;
	}

	set country(value) {
		this._country = value;
	}

	//endregion

	//region "organization" Accessors

	getOrganization() {
		return this._organization;
	}

	get organization() {
		return this._organization;
	}

	setOrganization(value) {
		this._organization = value;
	}

	set organization(value) {
		this._organization = value;
	}

	//endregion

	//region "organizationUnit" Accessors

	getOrganizationUnit() {
		return this._organizationUnit;
	}

	get organizationUnit() {
		return this._organizationUnit;
	}

	setOrganizationUnit(value) {
		this._organizationUnit = value;
	}

	set organizationUnit(value) {
		this._organizationUnit = value;
	}

	//endregion

	//region "dnQualifier" Accessors

	getDNQualifier() {
		return this._dnQualifier;
	}

	get dnQualifier() {
		return this._dnQualifier;
	}

	setDNQualifier(value) {
		this._dnQualifier = value;
	}

	set dnQualifier(value) {
		this._dnQualifier = value;
	}

	//endregion

	//region "stateName" Accessors

	getStateName() {
		return this._stateName;
	}

	get stateName() {
		return this._stateName;
	}

	setStateName(value) {
		this._stateName = value;
	}

	set stateName(value) {
		this._stateName = value;
	}

	//endregion

	//region "commonName" Accessors

	getCommonName() {
		return this._commonName;
	}

	get commonName() {
		return this._commonName;
	}

	setCommonName(value) {
		this._commonName = value;
	}

	set commonName(value) {
		this._commonName = value;
	}

	//endregion

	//region "serialNumber" Accessors

	getSerialNumber() {
		return this._serialNumber;
	}

	get serialNumber() {
		return this._serialNumber;
	}

	setSerialNumber(value) {
		this._serialNumber = value;
	}

	set serialNumber(value) {
		this._serialNumber = value;
	}

	//endregion

	//region "locality" Accessors

	getLocality() {
		return this._locality;
	}

	get locality() {
		return this._locality;
	}

	setLocality(value) {
		this._locality = value;
	}

	set locality(value) {
		this._locality = value;
	}

	//endregion

	//region "title" Accessors

	getTitle() {
		return this._title;
	}

	get title() {
		return this._title;
	}

	setTitle(value) {
		this._title = value;
	}

	set title(value) {
		this._title = value;
	}

	//endregion

	//region "surname" Accessors

	getSurname() {
		return this._surname;
	}

	get surname() {
		return this._surname;
	}

	setSurname(value) {
		this._surname = value;
	}

	set surname(value) {
		this._surname = value;
	}

	//endregion

	//region "givenName" Accessors

	getGivenName() {
		return this._givenName;
	}

	get givenName() {
		return this._givenName;
	}

	setGivenName(value) {
		this._givenName = value;
	}

	set givenName(value) {
		this._givenName = value;
	}

	//endregion

	//region "initials" Accessors

	getInitials() {
		return this._initials;
	}

	get initials() {
		return this._initials;
	}

	setInitials(value) {
		this._initials = value;
	}

	set initials(value) {
		this._initials = value;
	}

	//endregion

	//region "pseudonym" Accessors

	getPseudonym() {
		return this._pseudonym;
	}

	get pseudonym() {
		return this._pseudonym;
	}

	setPseudonym(value) {
		this._pseudonym = value;
	}

	set pseudonym(value) {
		this._pseudonym = value;
	}

	//endregion

	//region "generationQualifier" Accessors

	getGenerationQualifier() {
		return this._generationQualifier;
	}

	get generationQualifier() {
		return this._generationQualifier;
	}

	setGenerationQualifier(value) {
		this._generationQualifier = value;
	}

	set generationQualifier(value) {
		this._generationQualifier = value;
	}

	//endregion

	//region "emailAddress" Accessors

	getEmailAddress() {
		return this._emailAddress;
	}

	get emailAddress() {
		return this._emailAddress;
	}

	setEmailAddress(value) {
		this._emailAddress = value;
	}

	set emailAddress(value) {
		this._emailAddress = value;
	}

	toModel() {
		if (!this._commonName) {
			throw new Error('The "commonName" field was not set');
		}

		let model = super.toModel();
		model['subjectName'] = {
			country: this._country,
			organization: this._organization,
			organizationUnit: this._organizationUnit,
			dnQualifier: this._dnQualifier,
			stateName: this._stateName,
			commonName: this._commonName,
			serialNumber: this._serialNumber,
			locality: this._locality,
			title: this._title,
			surname: this._surname,
			givenName: this._givenName,
			initials: this._initials,
			pseudonym: this._pseudonym,
			generationQualifier: this._generationQualifier,
			emailAddress: this._emailAddress
		};
		return model;
	}
}

exports.SslCertificateParameters = SslCertificateParameters;
exports.PkiBrazilCertificateParameters = PkiBrazilCertificateParameters;
exports.CnbCertificateParameters = CnbCertificateParameters;
exports.CieInstitution = CieInstitution;
exports.CieCertificateParameters = CieCertificateParameters;
exports.ArispEndereco = ArispEndereco;
exports.ArispCartorioInfo = ArispCartorioInfo;
exports.ArispCertificateParameters = ArispCertificateParameters;
exports.CustomCertificateParameters = CustomCertificateParameters;
exports.CertificateParameters = CertificateParameters;
