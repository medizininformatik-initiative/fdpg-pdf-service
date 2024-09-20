import{d as V,o as n,a as d,b as _,F as p,t as I,u as C,e as Z,f as le,c as D,w as N,E as oe,g as L,h as m,i as T,j as K,k as re,l as pe,m as ye,n as ce,p as w,q as ue,s as ke}from"./print-9c1a5ddb.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";var k=(e=>(e.Draft="Draft",e.Outstanding="Outstanding",e.Ongoing="Ongoing",e.Completed="Completed",e.Archive="Archive",e.Requested="Requested",e.Pending="Pending",e.Current="Current",e))(k||{}),a=(e=>(e.MRI="MRI",e.KUM="KUM",e.UKT="UKT",e.UKU="UKU",e.UKR="UKR",e.UKS="UKS",e.UKAU="UKAU",e.Charité="Charité",e.UMG="UMG",e.MHH="MHH",e.UKHD="UKHD",e.UKSH="UKSH",e.UKK="UKK",e.UKM="UKM",e.UKW="UKW",e.UKDD="UKDD",e.UKEr="UKEr",e.UKF="UKF",e.UKFR="UKFR",e.UKGI="UKGI",e.UKMR="UKMR",e.UKG="UKG",e.UMMD="UMMD",e.UM="UM",e.UMM="UMM",e.UKA="UKA",e.UKB="UKB",e.UME="UME",e.UKH="UKH",e.UKE="UKE",e.UKJ="UKJ",e.UKL="UKL",e.UMR="UMR",e.UKD="UKD",e.UKRUB="UKRUB",e.KC="KC",e.CTK="CTK",e.UKOWL="UKOWL",e.UOL="UOL",e.VirtualAll="VIRTUAL_ALL",e))(a||{}),J=(e=>(e.AD="AD",e.AT="AT",e.AU="AU",e.BE="BE",e.BG="BG",e.BR="BR",e.CA="CA",e.CH="CH",e.CZ="CZ",e.DE="DE",e.DK="DK",e.DZ="DZ",e.EE="EE",e.ES="ES",e.FI="FI",e.FR="FR",e.GB="GB",e.GR="GR",e.HR="HR",e.HU="HU",e.ID="ID",e.IE="IE",e.IL="IL",e.IN="IN",e.IR="IR",e.IS="IS",e.IT="IT",e.JP="JP",e.KE="KE",e.LI="LI",e.LT="LT",e.LU="LU",e.LV="LV",e.MT="MT",e.MX="MX",e.NL="NL",e.NO="NO",e.NZ="NZ",e.PL="PL",e.PR="PR",e.PT="PT",e.RO="RO",e.RU="RU",e.SA="SA",e.SE="SE",e.SI="SI",e.TN="TN",e.TW="TW",e.UA="UA",e.US="US",e.ZA="ZA",e.ZM="ZM",e))(J||{}),F=(e=>(e.Admin="Admin",e.FdpgMember="FdpgMember",e.Researcher="Researcher",e.DizMember="DizMember",e.UacMember="UacMember",e))(F||{}),ee=(e=>(e.Distributed="DISTRIBUTED",e.Centralized="CENTRALIZED",e.Biosample="BIOSAMPLE",e))(ee||{}),z=(e=>(e.TO_CHECK="TO_CHECK",e.IN_WORK="IN_WORK",e))(z||{}),y=(e=>(e.Archived="ARCHIVED",e.Draft="DRAFT",e.ResearcherPending="RESEARCHER_PENDING",e.ResearcherOngoing="RESEARCHER_ONGOING",e.ResearcherFinished="RESEARCHER_FINISHED",e.DizPending="DIZ_PENDING",e.DizOngoing="DIZ_ONGOING",e.DizFinished="DIZ_FINISHED",e.DizRequested="DIZ_REQUESTED",e.UacPending="UAC_PENDING",e.UacOngoing="UAC_ONGOING",e.UacFinished="UAC_FINISHED",e.UacRequested="UAC_REQUESTED",e.FdpgRequestedToCheck="FDPG_REQUESTED_TO_CHECK",e.FdpgRequestedInWork="FDPG_REQUESTED_IN_WORK",e.FdpgPendingToCheck="FDPG_PENDING_TO_CHECK",e.FdpgPendingInWork="FDPG_PENDING_IN_WORK",e.FdpgOngoingToCheck="FDPG_ONGOING_TO_CHECK",e.FdpgOngoingInWork="FDPG_ONGOING_IN_WORK",e.FdpgFinished="FDPG_FINISHED",e))(y||{});const H={[a.MRI]:{city:"München",display:"Klinikum der Technischen Universität München",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.KUM]:{city:"München",display:"LMU Klinikum",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.UKT]:{city:"Tübingen",display:"Universitätsklinikum Tübingen",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.UKU]:{city:"Ulm",display:"Universitätsklinikum Ulm",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.UKR]:{city:"Regensburg",display:"Universitätsklinikum Regensburg",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.UKS]:{city:"Homburg",display:"Universität des Saarlandes / Universitätsklinikum des Saarlandes",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.UKAU]:{city:"Augsburg",display:"Universitätsklinikum Augsburg",definition:"DIFUTURE",email:"some.todo@af-universität.de"},[a.Charité]:{city:"Berlin",display:"Charité - Universitätsmedizin Berlin",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UMG]:{city:"Göttingen",display:"Universitätsmedizin Göttingen",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.MHH]:{city:"Hannover",display:"Medizinische Hochschule Hannover",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKHD]:{city:"Heidelberg",display:"Universitätsklinikum Heidelberg",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKSH]:{city:"Kiel",display:"Universitätsklinikum Schleswig-Holstein",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKK]:{city:"Köln",display:"Universitätsklinikum Köln",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKM]:{city:"Münster",display:"Universität Münster",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKW]:{city:"Würzburg",display:"Universitätsklinikum Würzburg",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKDD]:{city:"Dresden",display:"Technische Universität Dresden",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKEr]:{city:"Erlangen",display:"Universitätsklinikum Erlangen",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKF]:{city:"Frankfurt",display:"Universitätsklinikum Frankfurt",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKFR]:{city:"Freiburg",display:"Universitätsklinikum Freiburg",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKGI]:{city:"Gießen",display:"Universitätsklinikum Gießen",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKMR]:{city:"Marburg",display:"Universitätsklinikum Marburg",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UKG]:{city:"Greifswald",display:"Universitätsmedizin Greifswald",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UMMD]:{city:"Magdeburg",display:"Universitätsmedizin Magdeburg",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UM]:{city:"Mainz",display:"Universitätsmedizin der Johannes Gutenberg-Universität Mainz",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.UMM]:{city:"Mannheim",display:"Universitätsklinikum Mannheim",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.KC]:{city:"Chemnitz",display:"Klinikum Chemnitz gGmbH",definition:"MIRACUM",email:"some.todo@af-universität.de"},[a.CTK]:{city:"Cottbus",display:"Medizinische Universität Lausitz - Carl Thiem",definition:"HiGHmed",email:"some.todo@af-universität.de"},[a.UKA]:{city:"Aachen",display:"Universitätsklinikum Aachen",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKB]:{city:"Bonn",display:"Universitätsklinikum Bonn",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UME]:{city:"Essen",display:"Universitätsklinikum Essen",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKH]:{city:"Halle (Saale)",display:"Universitätsklinikum Halle (Saale)",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKE]:{city:"Hamburg-Eppendorf",display:"Universitätsklinikum Hamburg-Eppendorf",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKJ]:{city:"Jena",display:"Universitätsklinikum Jena",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKL]:{city:"Leipzig",display:"Universitätsklinikum Leipzig",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UMR]:{city:"Rostock",display:"Universitätsmedizin Rostock",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKD]:{city:"Düsseldorf",display:"Universitätsklinikum Düsseldorf",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKRUB]:{city:"Bochum",display:"Universitätsklinikum der Ruhr-Universität Bochum",definition:"SMITH",email:"some.todo@af-universität.de"},[a.UKOWL]:{display:"Universitätsklinikum OWL",definition:"HiGHmed",city:"Bielefeld",email:""},[a.UOL]:{display:"Carl von Ossietzky Universität Oldenburg",definition:"HiGHmed",city:"Oldenburg",email:""},[a.VirtualAll]:{city:"Alle Standorte",display:"Alle Standorte",definition:"VIRTUAL",email:""}},be=[a.UKD,a.UKRUB];Object.entries(H).filter(([e])=>e!==a.VirtualAll&&!be.includes(e)).sort(([e,i],[l,t])=>i.city.localeCompare(t.city)).map(([e,i])=>({label:i.display,value:e}));const x=[{prop:"createdAt",header:"dashboard.application",sortable:!0,type:"date"},{prop:"projectAbbreviation",header:"dashboard.projectAbbreviations",sortable:!0,type:"tag"},{prop:"ownerName",header:"general.applicant",sortable:!0}];y.FdpgRequestedInWork+"",[...x],y.FdpgPendingInWork+"",[...x],y.FdpgOngoingInWork+"",[...x],y.FdpgFinished+"",[...x];F.FdpgMember+"",k.Pending+"",z.TO_CHECK+"",y.FdpgPendingToCheck,z.IN_WORK+"",y.FdpgPendingInWork,k.Requested+"",z.TO_CHECK+"",y.FdpgRequestedToCheck,z.IN_WORK+"",y.FdpgRequestedInWork,k.Ongoing+"",z.TO_CHECK+"",y.FdpgOngoingToCheck,z.IN_WORK+"",y.FdpgOngoingInWork,k.Completed+"",y.FdpgFinished,F.Researcher+"",k.Draft+"",y.Draft,k.Pending+"",y.ResearcherPending,k.Ongoing+"",y.ResearcherOngoing,k.Completed+"",y.ResearcherFinished,F.UacMember+"",k.Pending+"",y.UacPending,k.Ongoing+"",y.UacOngoing,k.Completed+"",y.UacFinished,k.Requested+"",y.UacRequested,F.DizMember+"",k.Pending+"",y.DizPending,k.Ongoing+"",y.DizOngoing,k.Completed+"",y.DizFinished,k.Requested+"",y.DizRequested;const he={key:"researcher",cardLabel:"proposal.personalDetails",terms:[{label:"general.titleAndName",size:12,definitions:[[{key:"title"}],[{key:"firstName"},{key:"lastName"}]]},{label:"proposal.belongingOptional",size:12,definitions:[[{key:"affiliation"}]]},{label:"proposal.emailAddress",size:12,definitions:[[{key:"email"}]]}]},ge={key:"institute",cardLabel:"proposal.detailsOfTheInstitutionFacility",terms:[{label:"proposal.selectionOfMiiLocation",size:24,definitions:[[{key:"miiLocation",kind:"lookup",lookupMap:H,lookupKey:"display"}]]},{label:"proposal.fullCorrectNameOfTheInstitutionFacilityJurPerson",size:24,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"name"}]]},{label:"general.address",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"streetAddress"},{key:"houseNumber"}],[{key:"postalCode"},{key:"city"}],[{key:"country",prefix:"countries.",kind:"translatable"}]]},{label:"proposal.emailAddress",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"email"}]]}]},me={key:"participantCategory",cardLabel:"proposal.involvedCategory",terms:[{label:"proposal.involvedCategory",size:24,definitions:[[{key:"category",prefix:"proposal.participantCategory_",kind:"translatable"}]]}]},Ie=[he,ge,me],Ue={sectionLabel:"proposal.applicant",kind:"object",key:"applicant",mapping:Ie},De={key:"content",cardLabel:"proposal.typeOfUse_dataPrivacy",loopOn:"data",terms:[{label:"proposal.typeOfUse",size:24,definitions:[[{key:"headline"}]]},{label:"proposal.dataPrivacy",size:24,definitions:[[{key:"text"}]]}]},q={sectionLabel:"proposal.dataPrivacy",kind:"object",key:"content",mapping:[De]},Ae={kind:"virtual",key:"content",cardLabel:"general.proposal",terms:[{label:"proposal.projectAbbreviation",size:12,definitions:[[{key:"projectAbbreviation"}]]},{label:"proposal.submittedAt",size:12,definitions:[[{key:"submittedAt",kind:"date"}]]},{label:"proposal.proposalId",size:12,definitions:[[{key:"proposalId"}]]},{label:"general.applicantId",size:12,definitions:[[{key:"ownerId"}]]}]},Ke={kind:"virtual",key:"content",cardLabel:"general.additionalInformation",terms:[{label:"proposal.fdpgCheckNotes",size:24,definitions:[[{key:"fdpgCheckNotes"}]]}]},Ee={key:"content",cardLabel:"proposal.appendix",loopOn:"uploads",terms:[{label:"proposal.type",size:24,definitions:[[{key:"type",kind:"translatable",prefix:"proposal.uploadType_"}]]},{label:"general.fileName",size:24,definitions:[[{key:"fileName"}]]},{label:"proposal.appendixId",size:24,definitions:[[{key:"_id"}]]}]},P={sectionLabel:"general.projectOverview",kind:"object",key:"content",mapping:[Ae,Ke,Ee]},_e={key:"researcher",cardLabel:"proposal.personalDetails",terms:[{label:"general.titleAndName",size:12,definitions:[[{key:"title"}],[{key:"firstName"},{key:"lastName"}]]},{label:"proposal.belongingOptional",size:12,definitions:[[{key:"affiliation"}]]},{label:"proposal.emailAddress",size:12,definitions:[[{key:"email"}]]}]},Te={key:"institute",cardLabel:"proposal.detailsOfTheInstitutionFacility",terms:[{label:"proposal.selectionOfMiiLocation",size:24,hideIfThisValueIsFalsy:"miiLocation",definitions:[[{key:"miiLocation",kind:"lookup",lookupMap:H,lookupKey:"display"}]]},{label:"proposal.fullCorrectNameOfTheInstitutionFacilityJurPerson",size:24,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"name"}]]},{label:"general.address",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"streetAddress"},{key:"houseNumber"}],[{key:"postalCode"},{key:"city"}],[{key:"country",prefix:"countries.",kind:"translatable"}]]},{label:"proposal.emailAddress",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"email"}]]}]},ze={key:"participantCategory",cardLabel:"proposal.involvedCategory",terms:[{label:"proposal.involvedCategory",size:24,definitions:[[{key:"category",prefix:"proposal.participantCategory_",kind:"translatable"}]]}]},Oe=[_e,Te,ze],Ne={sectionLabel:"proposal.participatingScientists",arrayLabel:[{key:"firstName"},{key:"lastName"}],arrayLabelKey:"researcher",kind:"array",key:"participants",mapping:Oe},Ce={key:"projectResponsibility",cardLabel:"proposal.personalDetails",hideIfOtherValueIsTruthy:["researcher","email"],terms:[{label:"proposal.applicantIsProjectResponsible",size:12,definitions:[[{key:"applicantIsProjectResponsible",kind:"boolean",true:"proposal.yes",false:"proposal.no"}]]}]},Re={key:"researcher",cardLabel:"proposal.personalDetails",hideIfOtherValueIsTruthy:["projectResponsibility","applicantIsProjectResponsible"],terms:[{label:"general.titleAndName",size:12,definitions:[[{key:"title"}],[{key:"firstName"},{key:"lastName"}]]},{label:"proposal.belongingOptional",size:12,definitions:[[{key:"affiliation"}]]},{label:"proposal.emailAddress",size:12,definitions:[[{key:"email"}]]}]},Fe={key:"institute",cardLabel:"proposal.detailsOfTheInstitutionFacility",hideIfOtherValueIsTruthy:["projectResponsibility","applicantIsProjectResponsible"],terms:[{label:"proposal.selectionOfMiiLocation",size:24,hideIfThisValueIsFalsy:"miiLocation",definitions:[[{key:"miiLocation",kind:"lookup",lookupMap:H,lookupKey:"display"}]]},{label:"proposal.fullCorrectNameOfTheInstitutionFacilityJurPerson",size:24,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"name"}]]},{label:"general.address",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"streetAddress"},{key:"houseNumber"}],[{key:"postalCode"},{key:"city"}],[{key:"country",prefix:"countries.",kind:"translatable"}]]},{label:"proposal.emailAddress",size:12,hideIfOtherValueIsTruthy:"miiLocation",definitions:[[{key:"email"}]]}]},Le={key:"participantCategory",cardLabel:"proposal.involvedCategory",hideIfOtherValueIsTruthy:["projectResponsibility","applicantIsProjectResponsible"],terms:[{label:"proposal.involvedCategory",size:24,definitions:[[{key:"category",prefix:"proposal.participantCategory_",kind:"translatable"}]]}]},fe=[Ce,Re,Fe,Le],He={sectionLabel:"proposal.projectResponsible",kind:"object",key:"projectResponsible",mapping:fe},Me={key:"projectUser",cardLabel:null,terms:[{label:"proposal.projectUser",size:24,definitions:[[{key:"projectUserType",prefix:"proposal.projectUserType_",kind:"translatable"}]]}]},Se={sectionLabel:"proposal.projectUser",kind:"single",key:"projectUser",card:Me},Ge={key:"requestedData",cardLabel:null,terms:[{label:"proposal.patientInfo",size:24,definitions:[[{key:"patientInfo"}]]},{label:"proposal.informationOnDataSelection",size:24,definitions:[[{key:"dataInfo"}]]},{label:"proposal.informationOnDesiredDataAmount",size:24,definitions:[[{key:"desiredDataAmount"}]]}]},xe={sectionLabel:"proposal.informationOnTheRequestedData",kind:"single",key:"requestedData",card:Ge},Be={key:"generalProjectInformation",cardLabel:"proposal.generalProjectInformation",terms:[{label:"proposal.projectTitle",size:24,definitions:[[{key:"projectTitle"}]]},{label:"proposal.desiredStartTime",size:12,definitions:[[{key:"desiredStartTime",kind:"date"}]]},{label:"proposal.projectDuration",size:12,definitions:[[{key:"projectDuration"}]]},{label:"proposal.projectFunding",size:12,definitions:[[{key:"projectFunding"}]]},{label:"proposal.fundingReferenceNumber",size:12,definitions:[[{key:"fundingReferenceNumber"}]]}]},We={key:"feasibility",cardLabel:"proposal.feasibility",terms:[{label:"proposal.feasibilityId",size:24,definitions:[[{key:"id"}]]},{label:"proposal.assessmentOfFeasibilityDetails",size:24,definitions:[[{key:"details"}]]}]},$e={key:"projectDetails",cardLabel:"proposal.projectDetails",terms:[{label:"proposal.simpleProjectDescription",size:24,definitions:[[{key:"simpleProjectDescription"}]]},{label:"proposal.department",size:24,definitions:[[{key:"department",prefix:"departments.",kind:"translatable",isList:!0}]]},{label:"proposal.hypothesisAndQuestionProjectGoals",size:24,definitions:[[{key:"hypothesisAndQuestionProjectGoals"}]]},{label:"proposal.scientificBackground",size:24,definitions:[[{key:"scientificBackground"}]]},{label:"proposal.materialAndMethods",size:24,definitions:[[{key:"materialAndMethods"}]]}]},Ve={key:"ethicVote",cardLabel:"proposal.ethicsVote",terms:[{label:"proposal.ethicVoteExistingLabel",size:24,definitions:[[{key:"isExisting",kind:"boolean",true:"proposal.present",false:"proposal.notRequired"}]]},{label:"proposal.ethicsCommittee",size:24,definitions:[[{key:"ethicsCommittee"}]],hideIfThisValueIsFalsy:"isExisting"},{label:"proposal.ethicsVoteNumber",size:12,definitions:[[{key:"ethicsVoteNumber"}]],hideIfThisValueIsFalsy:"isExisting"},{label:"proposal.voteFromDate",size:12,definitions:[[{key:"voteFromDate",kind:"date"}]],hideIfThisValueIsFalsy:"isExisting"},{label:"proposal.admitReputationOfAttachment",size:24,definitions:[[{key:"admitReputationOfAttachment",kind:"boolean",true:"proposal.yes",false:"proposal.no"}]],hideIfThisValueIsFalsy:"isExisting"}]},Ze={key:"resourceAndRecontact",cardLabel:"proposal.projectResourcesAndRecontact",terms:[{label:"proposal.areSufficientProfessionalAndFinancialResourcesAvailable",size:24,definitions:[[{key:"hasEnoughResources",kind:"boolean",true:"proposal.yes",false:"proposal.no"}]]},{label:"proposal.additionalDataCollection",size:24,definitions:[[{key:"isRecontactingIntended",kind:"boolean",true:"proposal.yes",false:"proposal.no"}]]}]},Je={key:"propertyRights",cardLabel:"proposal.propertyRights",terms:[{label:"proposal.intellectualPropertyRightCreationApplicationOptions",size:24,definitions:[[{key:"options"}]]}]},we={key:"plannedPublication",cardLabel:"proposal.plannedPublications",hideIfOtherValueIsTruthy:["plannedPublication","publications"],terms:[{label:"proposal.noPublicationIsPlanned",size:24,definitions:[[{key:"noPublicationPlanned",kind:"boolean",true:"proposal.yes",false:"proposal.no"}]]}]},qe={key:"plannedPublication",cardLabel:"proposal.plannedPublications",loopOn:"publications",hideIfOtherValueIsTruthy:["plannedPublication","noPublicationPlanned"],terms:[{label:"proposal.type",size:24,definitions:[[{key:"type",prefix:"proposal.publicationType_",kind:"translatable"}]]},{label:"proposal.description",size:24,definitions:[[{key:"description"}]]},{label:"proposal.authors",size:24,definitions:[[{key:"authors"}]]}]},Pe={key:"addressees",cardLabel:"proposal.addressees",terms:[{label:"proposal.desiredLocations",size:24,definitions:[[{key:"desiredLocations",isList:!0,kind:"lookup",lookupMap:H,lookupKey:"display"}]]}]},Xe={key:"typeOfUse",cardLabel:"proposal.typeOfUse",terms:[{label:"proposal.typeOfUse",size:24,definitions:[[{key:"usage",isList:!0,prefix:"proposal.typeOfUse_",kind:"translatable"}]]},{label:"proposal.dataPrivacyExtra",size:24,definitions:[[{key:"dataPrivacyExtra",kind:"content"}]]}]},Ye={key:"informationOnRequestedBioSamples",cardLabel:"proposal.informationOnRequestedBioSamples",loopOn:"biosamples",terms:[{label:"proposal.biosampleType",size:24,definitions:[[{key:"type"}]]},{label:"proposal.biosampleCount",size:24,definitions:[[{key:"count"}]]},{label:"proposal.biosampleParameter",size:24,definitions:[[{key:"parameter"}]]},{label:"proposal.biosampleLaboratoryResources",size:24,definitions:[[{key:"laboratoryResources"}]]},{label:"proposal.biosampleMaterialRequirements",size:24,definitions:[[{key:"requirements"}]]}]},Qe=[Be,We,$e,Ve,Ze,Je,we,qe,Pe,Xe,Ye],je={sectionLabel:"proposal.informationAboutTheUserProject",kind:"object",key:"userProject",mapping:Qe};const ei=(e,i="de-DE")=>e?(e instanceof Date?e:new Date(e)).toLocaleDateString(i,{year:"numeric",month:"2-digit",day:"2-digit"}):"",X=V({__name:"DefinitionCardItem",props:{value:{type:[String,Boolean,Number],required:!0},definition:{type:Object,required:!0}},setup(e){return(i,l)=>e.value===void 0?(n(),d(p,{key:0},[_(" - ")],64)):e.definition.kind==="translatable"?(n(),d(p,{key:1},[_(I(i.$t(`${e.definition.prefix}${e.value}`)),1)],64)):e.definition.kind==="date"?(n(),d(p,{key:2},[_(I(C(ei)(e.value)),1)],64)):e.definition.kind==="boolean"?(n(),d(p,{key:3},[_(I(i.$t(`${e.definition[e.value]}`)),1)],64)):e.definition.kind==="lookup"?(n(),d(p,{key:4},[_(I(e.definition.lookupMap[e.value][e.definition.lookupKey]),1)],64)):(n(),d(p,{key:5},[_(I(e.value),1)],64))}}),ii={role:"term"},ai={key:0},ni=V({__name:"DefinitionCard",props:{dto:{type:Object,required:!0},card:{type:Object,required:!0}},setup(e){const i=e,l=Z(()=>i.card.loopOn?i.dto:i.dto[i.card.key]),c=le().matched.some(b=>b.name==="PrintLayout");return(b,M)=>{const O=re,S=pe,G=ye,r=oe;return n(),D(r,{shadow:C(c)?"never":"always"},{default:N(()=>{var h;return[L(S,{gutter:20},{default:N(()=>[(n(!0),d(p,null,m(e.card.terms,({label:o,size:v,definitions:u,hideIfOtherValueIsTruthy:U,hideIfThisValueIsFalsy:g},A)=>(n(),D(O,{key:"group"+A,sm:24,md:v},{default:N(()=>[!(g&&!l.value[g])&&!(U&&l.value[U])?(n(),d(p,{key:0},[T("div",ii,I(b.$t(o)),1),(n(!0),d(p,null,m(u,(ae,ne)=>(n(),d("div",{key:"def"+ne,role:"definition"},[(n(!0),d(p,null,m(ae,(E,te)=>(n(),d("span",{key:"content"+te},[E.hideIfOtherValueIsTruthy&&l.value[E.hideIfOtherValueIsTruthy]?K("",!0):(n(),d(p,{key:0},[E.isList?(n(),d("ul",ai,[(n(!0),d(p,null,m(l.value[E.key],(se,de)=>(n(),d("li",{key:"li"+A+de},[L(X,{class:"print-region",definition:E,value:se},null,8,["definition","value"])]))),128))])):K("",!0),E.isList?K("",!0):(n(),D(X,{key:1,definition:E,value:l.value[E.key]},null,8,["definition","value"]))],64))]))),128))]))),128))],64)):K("",!0)]),_:2},1032,["md"]))),128))]),_:1}),(h=e.card.actions)!=null&&h.length?(n(),D(S,{key:0,justify:"end",class:"action-row"},{default:N(()=>[(n(!0),d(p,null,m(e.card.actions,(o,v)=>{var u;return n(),D(G,{key:"action"+v,type:"text",size:"large",disabled:(u=o.disabled)==null?void 0:u.value,onClick:o.onClick},{default:N(()=>[_(I(b.$t(o.label)),1)]),_:2},1032,["disabled","onClick"])}),128))]),_:1})):K("",!0)]}),_:1},8,["shadow"])}}});const Y=ve(ni,[["__scopeId","data-v-9cc1c93c"]]),R=V({__name:"PrintCard",props:{dto:{type:Object,required:!0},card:{type:Object,required:!0},headline:{type:String,default:"h3"}},setup(e){return(i,l)=>(n(),d(p,null,[e.card.cardLabel?(n(),D(ce(e.headline),{key:0},{default:N(()=>[_(I(i.$t(e.card.cardLabel)),1)]),_:1})):K("",!0),e.card.loopOn?(n(!0),d(p,{key:1},m(e.dto[e.card.key][e.card.loopOn],(t,c)=>(n(),D(Y,{key:"item"+c,card:e.card,dto:t,class:"print-region"},null,8,["card","dto"]))),128)):(n(),D(Y,{key:2,card:e.card,dto:e.dto},null,8,["card","dto"]))],64))}});const s=e=>{if(e){let i;return typeof e.toISOString=="function"?i=e.toISOString():i=e.trim(),i.length>0?i:void 0}},f=e=>e?Object.entries(e).filter(l=>l[1]!==null&&l[1]!==void 0&&l[0]!=="_id"&&l[0]!=="isDone").length<=0:!0,ti="NEW_ID",B=(e,i)=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,title:s((i==null?void 0:i.title)??(e==null?void 0:e.title)),firstName:s((i==null?void 0:i.given_name)??(e==null?void 0:e.firstName)),lastName:s((i==null?void 0:i.family_name)??(e==null?void 0:e.lastName)),affiliation:s((i==null?void 0:i.affiliation)??(e==null?void 0:e.affiliation)),email:s((i==null?void 0:i.email)??(e==null?void 0:e.email))}),W=(e,i)=>{var t;let l=e==null?void 0:e.miiLocation;if(i&&"MII_LOCATION"in i)l=i.MII_LOCATION;else if(i&&"organization"in i){const c=Object.values(J).includes(i.organization.country)?i.organization.country:void 0;return{_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,miiLocation:void 0,name:s(i.organization.name),streetAddress:s(i.organization.street),postalCode:s(i.organization.postalCode),city:s(i.organization.city),email:s(i.organization.email),country:c,houseNumber:s((t=i.organization)==null?void 0:t.houseNumber)}}return l?{_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,miiLocation:l,name:void 0,streetAddress:void 0,postalCode:void 0,city:void 0,email:void 0,country:void 0,houseNumber:void 0}:{_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,miiLocation:l,name:s(e==null?void 0:e.name),streetAddress:s(e==null?void 0:e.streetAddress),postalCode:s(e==null?void 0:e.postalCode),city:s(e==null?void 0:e.city),email:s(e==null?void 0:e.email),country:(e==null?void 0:e.country)??J.DE,houseNumber:s(e==null?void 0:e.houseNumber)}},$=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,category:e==null?void 0:e.category}),si=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,projectUserType:e==null?void 0:e.projectUserType}),di=(e,i)=>({researcher:B(e==null?void 0:e.researcher,i),institute:W(e==null?void 0:e.institute,i),participantCategory:$(e==null?void 0:e.participantCategory)}),li=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,applicantIsProjectResponsible:(e==null?void 0:e.applicantIsProjectResponsible)??!1}),oi=(e,i)=>{var O;const l=(O=e==null?void 0:e.projectResponsibility)==null?void 0:O.applicantIsProjectResponsible;let t,c,b;i&&l?(t=void 0,c=void 0,b=void 0):l?(t=B(),c=W(),b=$()):(t=B(e==null?void 0:e.researcher),c=W(e==null?void 0:e.institute),b=$(e==null?void 0:e.participantCategory));const M=li(e==null?void 0:e.projectResponsibility);return{researcher:t,institute:c,participantCategory:b,projectResponsibility:M}},ri=e=>({_id:(e==null?void 0:e._id)??ti,researcher:B(e==null?void 0:e.researcher),institute:W(e==null?void 0:e.institute),participantCategory:$(e==null?void 0:e.participantCategory)}),pi=e=>{if(e){const i=e==null?void 0:e.map(t=>ri(t)).filter(t=>!(f(t.institute)&&f(t.participantCategory)&&f(t.researcher)));if(!(i.length<=0))return i}return[]},ie="NEW_ID",yi=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,simpleProjectDescription:s(e==null?void 0:e.simpleProjectDescription),department:(e==null?void 0:e.department)??[],scientificBackground:s(e==null?void 0:e.scientificBackground),hypothesisAndQuestionProjectGoals:s(e==null?void 0:e.hypothesisAndQuestionProjectGoals),materialAndMethods:s(e==null?void 0:e.materialAndMethods)}),ci=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,isExisting:(e==null?void 0:e.isExisting)??!0,ethicsCommittee:s(e==null?void 0:e.ethicsCommittee),ethicsVoteNumber:s(e==null?void 0:e.ethicsVoteNumber),voteFromDate:s(e==null?void 0:e.voteFromDate),admitReputationOfAttachment:e==null?void 0:e.admitReputationOfAttachment}),ui=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,id:e==null?void 0:e.id,details:s(e==null?void 0:e.details)}),ki=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,projectTitle:s(e==null?void 0:e.projectTitle),desiredStartTime:s(e==null?void 0:e.desiredStartTime),projectDuration:e==null?void 0:e.projectDuration,projectFunding:s(e==null?void 0:e.projectFunding),fundingReferenceNumber:s(e==null?void 0:e.fundingReferenceNumber)}),vi=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,hasEnoughResources:(e==null?void 0:e.hasEnoughResources)??!1,isRecontactingIntended:(e==null?void 0:e.isRecontactingIntended)??!1}),bi=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,options:s(e==null?void 0:e.options)}),hi=(e,i)=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,noPublicationPlanned:(e==null?void 0:e.noPublicationPlanned)??!1,publications:gi(e==null?void 0:e.publications,i,e==null?void 0:e.noPublicationPlanned)}),Q=e=>({_id:(e==null?void 0:e._id)??ie,type:e==null?void 0:e.type,description:s(e==null?void 0:e.description),authors:s(e==null?void 0:e.authors)}),gi=(e,i,l)=>{if(e){const t=e.map(b=>Q(b)).filter(b=>!f(b));if(!(t.length<=0))return t}if(!i)return l?[]:[Q()]},mi=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,desiredLocations:(e==null?void 0:e.desiredLocations)??(e!=null&&e._id?[]:[a.VirtualAll])}),Ii=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,usage:(e==null?void 0:e.usage)??[],dataPrivacyExtra:s(e==null?void 0:e.dataPrivacyExtra)}),Ui=(e,i,l)=>{var t;return(t=i==null?void 0:i.usage)!=null&&t.includes(ee.Biosample)?{_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,biosamples:Di(e==null?void 0:e.biosamples,l)}:void 0},j=e=>({_id:(e==null?void 0:e._id)??ie,type:s(e==null?void 0:e.type),parameter:s(e==null?void 0:e.parameter),laboratoryResources:s(e==null?void 0:e.laboratoryResources),requirements:s(e==null?void 0:e.requirements),count:s(e==null?void 0:e.count)}),Di=(e,i)=>{if(e){const l=e.map(c=>j(c)).filter(c=>!f(c));if(!(l.length<=0))return l}return i?void 0:[j()]},Ai=(e,i)=>({generalProjectInformation:ki(e==null?void 0:e.generalProjectInformation),feasibility:ui(e==null?void 0:e.feasibility),projectDetails:yi(e==null?void 0:e.projectDetails),ethicVote:ci(e==null?void 0:e.ethicVote),resourceAndRecontact:vi(e==null?void 0:e.resourceAndRecontact),propertyRights:bi(e==null?void 0:e.propertyRights),plannedPublication:hi(e==null?void 0:e.plannedPublication,i),addressees:mi(e==null?void 0:e.addressees),typeOfUse:Ii(e==null?void 0:e.typeOfUse),informationOnRequestedBioSamples:Ui(e==null?void 0:e.informationOnRequestedBioSamples,e==null?void 0:e.typeOfUse,i)}),Ki=e=>({_id:e==null?void 0:e._id,isDone:(e==null?void 0:e.isDone)??!1,patientInfo:s(e==null?void 0:e.patientInfo),dataInfo:s(e==null?void 0:e.dataInfo),desiredDataAmount:e==null?void 0:e.desiredDataAmount}),Ei=e=>({mayor:(e==null?void 0:e.mayor)??0,minor:(e==null?void 0:e.minor)??1}),_i=e=>({id:e==null?void 0:e.id,firstName:e==null?void 0:e.firstName,lastName:e==null?void 0:e.lastName,email:e==null?void 0:e.email,username:e==null?void 0:e.username,miiLocation:e==null?void 0:e.miiLocation,role:e==null?void 0:e.role}),Ti=(e,i,l)=>({_id:e==null?void 0:e._id,projectAbbreviation:e==null?void 0:e.projectAbbreviation,participants:pi(e==null?void 0:e.participants),applicant:di(e==null?void 0:e.applicant,l),projectResponsible:oi(e==null?void 0:e.projectResponsible,i),projectUser:si(e==null?void 0:e.projectUser),userProject:Ai(e==null?void 0:e.userProject,i),requestedData:Ki(e==null?void 0:e.requestedData),uploads:e==null?void 0:e.uploads,isLocked:e==null?void 0:e.isLocked,status:e==null?void 0:e.status,locationStatus:e==null?void 0:e.locationStatus,createdAt:e==null?void 0:e.createdAt,submittedAt:e==null?void 0:e.submittedAt,updatedAt:e==null?void 0:e.updatedAt,dueDateForStatus:e==null?void 0:e.dueDateForStatus,history:(e==null?void 0:e.history)??[],numberOfRequestedLocations:e==null?void 0:e.numberOfRequestedLocations,numberOfApprovedLocations:e==null?void 0:e.numberOfApprovedLocations,numberOfSignedLocations:e==null?void 0:e.numberOfSignedLocations,contractAcceptedByResearcher:e==null?void 0:e.contractAcceptedByResearcher,contractRejectedByResearcher:e==null?void 0:e.contractRejectedByResearcher,contractRejectedByResearcherReason:e==null?void 0:e.contractRejectedByResearcherReason,researcherSignedAt:e==null?void 0:e.researcherSignedAt,owner:_i(e==null?void 0:e.owner),ownerId:e==null?void 0:e.ownerId,ownerName:e==null?void 0:e.ownerName,publications:(e==null?void 0:e.publications)??[],fdpgChecklist:(e==null?void 0:e.fdpgChecklist)??{},openFdpgTasks:(e==null?void 0:e.openFdpgTasks)??[],isDoneOverview:(e==null?void 0:e.isDoneOverview)??{},openDizChecks:(e==null?void 0:e.openDizChecks)??[],dizApprovedLocations:(e==null?void 0:e.dizApprovedLocations)??[],uacApprovedLocations:(e==null?void 0:e.uacApprovedLocations)??[],requestedButExcludedLocations:(e==null?void 0:e.requestedButExcludedLocations)??[],signedContracts:(e==null?void 0:e.signedContracts)??[],conditionalApprovals:(e==null?void 0:e.conditionalApprovals)??[],uacApprovals:(e==null?void 0:e.uacApprovals)??[],totalPromisedDataAmount:e==null?void 0:e.totalPromisedDataAmount,totalContractedDataAmount:e==null?void 0:e.totalContractedDataAmount,declineReasons:(e==null?void 0:e.declineReasons)??[],version:Ei(e==null?void 0:e.version),fdpgCheckNotes:e==null?void 0:e.fdpgCheckNotes}),zi={class:"title"},Oi={role:"region",class:"print-region"},Ni={key:1,role:"region",class:"print-region"},Fi=V({__name:"PrintProposal",setup(e){class i extends Error{constructor(h){super(h),this.name="FailedStateError"}}const l=[Ue,He,Se,Ne,je,xe],t=w(),c=w(),{t:b}=ue(),M=Z(()=>{var r,h,o,v,u,U,g,A;return{content:{ownerName:(r=t.value)==null?void 0:r.ownerName,ownerEmail:(h=t.value)==null?void 0:h.owner.email,ownerId:(o=t.value)==null?void 0:o.owner.id,submittedAt:(v=t.value)==null?void 0:v.submittedAt,projectAbbreviation:(u=t.value)==null?void 0:u.projectAbbreviation,proposalId:(U=t.value)==null?void 0:U._id,uploads:(g=t.value)==null?void 0:g.uploads,fdpgCheckNotes:(A=t.value)==null?void 0:A.fdpgCheckNotes}}}),O=Z(()=>{var h,o;const r=c.value??[];return(h=t.value)!=null&&h.userProject.typeOfUse.dataPrivacyExtra&&r.push({headline:b("proposal.dataPrivacyExtra"),text:(o=t.value)==null?void 0:o.userProject.typeOfUse.dataPrivacyExtra}),{content:{data:r}}}),S=async()=>{const r=window.data;if(c.value=window.dataPrivacyTexts,r)t.value=Ti(r);else throw new i("No Data")},G=(r,h)=>{var u,U,g;if(!h)return!1;const[o,v]=h;return Array.isArray((u=r==null?void 0:r[o])==null?void 0:u[v])?(U=r==null?void 0:r[o])==null?void 0:U[v].length:(g=r==null?void 0:r[o])==null?void 0:g[v]};return ke(()=>S()),(r,h)=>(n(),d(p,null,[T("h1",zi,I(r.$t("proposal.mIIUsageApplicationForm")),1),T("h2",null,I(r.$t(C(P).sectionLabel)),1),(n(!0),d(p,null,m(C(P).mapping,(o,v)=>(n(),d("section",{key:"card"+v,role:"region"},[L(R,{class:"print-region",dto:M.value,card:o},null,8,["dto","card"])]))),128)),(n(),d(p,null,m(l,(o,v)=>(n(),d(p,{key:"section"+v},[T("h2",null,I(r.$t(o.sectionLabel)),1),o.kind==="array"&&t.value?(n(!0),d(p,{key:0},m(t.value[o.key],(u,U)=>(n(),d("div",{key:"item"+U},[T("section",Oi,[T("h3",null,[(n(!0),d(p,null,m(o.arrayLabel,(g,A)=>(n(),d("span",{key:A},I(u[o.arrayLabelKey][g.key]??g.key),1))),128))]),(n(!0),d(p,null,m(o.mapping,(g,A)=>(n(),d(p,{key:"card"+A},[G(u,g.hideIfOtherValueIsTruthy)?K("",!0):(n(),D(R,{key:0,dto:u,card:g,headline:"h4"},null,8,["dto","card"]))],64))),128))])]))),128)):o.kind==="single"&&t.value?(n(),d("section",Ni,[L(R,{dto:t.value,card:o.card},null,8,["dto","card"])])):o.kind==="object"&&t.value?(n(!0),d(p,{key:2},m(o.mapping,(u,U)=>(n(),d("section",{key:"card"+U,role:"region",class:"print-region"},[G(t.value[o.key],u.hideIfOtherValueIsTruthy)?K("",!0):(n(),D(R,{key:0,dto:t.value[o.key],card:u},null,8,["dto","card"]))]))),128)):K("",!0)],64))),64)),T("h2",null,I(r.$t(C(q).sectionLabel)),1),(n(!0),d(p,null,m(C(q).mapping,(o,v)=>(n(),d("section",{key:"privacy-card"+v,role:"region"},[L(R,{class:"print-region",dto:O.value,card:o},null,8,["dto","card"])]))),128))],64))}});export{Fi as default};
