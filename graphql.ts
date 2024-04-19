export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	JSON: { input: any; output: any };
	JSONObject: { input: any; output: any };
	Time: { input: any; output: any };
}

export interface AccessToken {
	__typename?: "AccessToken";
	accessToken: Scalars["String"]["output"];
}

export interface AccountingSystemEntity {
	__typename?: "AccountingSystemEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: AccountingSystemEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export enum AccountingSystemEnum {
	Poster = "POSTER",
	Syrve = "SYRVE"
}

export interface AccountingSystemInput {
	name: AccountingSystemEnum;
}

export interface AccountingSystemToPlaceEntity {
	__typename?: "AccountingSystemToPlaceEntity";
	accountingSystem: AccountingSystemEntity;
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	syncOrders: Scalars["Boolean"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AccountingSystemToPlaceInput {
	accountingSystem: AccountingSystemInput;
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	place: PlaceInput;
	syncOrders: Scalars["Boolean"]["input"];
}

export interface ActiveNotificationEntity {
	__typename?: "ActiveNotificationEntity";
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	emitDate: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	type: NotificationTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ActiveNotificationInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	emitDate: Scalars["DateTime"]["input"];
	image?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	type: NotificationTypeEnum;
}

export interface ActiveOrderEntity {
	__typename?: "ActiveOrderEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	asapProcessTime: Scalars["Boolean"]["output"];
	code: Scalars["Int"]["output"];
	commentsToOrder?: Maybe<CommentToOrderEntity[]>;
	cookingTime?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	customerType: CustomerTypeEnum;
	deliveryAddress?: Maybe<Scalars["String"]["output"]>;
	deliveryTime?: Maybe<Scalars["String"]["output"]>;
	discountApplied?: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["String"]["output"];
	office?: Maybe<PlaceEntity>;
	place: PlaceEntity;
	position: Scalars["Int"]["output"];
	productsToOrders?: Maybe<ProductToOrderEntity[]>;
	startDate: Scalars["DateTime"]["output"];
	status: OrderStatusEnum;
	syncOrder: Scalars["Boolean"]["output"];
	table?: Maybe<TableEntity>;
	totalPrice: Scalars["Float"]["output"];
	type: OrderTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
	usersToOrder?: Maybe<UserToOrderEntity[]>;
}

export interface ActiveOrderInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	asapProcessTime: Scalars["Boolean"]["input"];
	code: Scalars["Int"]["input"];
	commentsToOrder?: InputMaybe<CommentToOrderInput[]>;
	cookingTime?: InputMaybe<Scalars["String"]["input"]>;
	createdAt: Scalars["DateTime"]["input"];
	customerType: CustomerTypeEnum;
	deliveryAddress?: InputMaybe<Scalars["String"]["input"]>;
	deliveryTime?: InputMaybe<Scalars["String"]["input"]>;
	discountApplied?: InputMaybe<Scalars["Float"]["input"]>;
	office?: InputMaybe<PlaceInput>;
	place: PlaceInput;
	position: Scalars["Int"]["input"];
	productsToOrders?: InputMaybe<ProductToOrderInput[]>;
	startDate: Scalars["DateTime"]["input"];
	status: OrderStatusEnum;
	syncOrder: Scalars["Boolean"]["input"];
	table?: InputMaybe<TableInput>;
	type: OrderTypeEnum;
	updatedAt: Scalars["DateTime"]["input"];
	usersToOrder?: InputMaybe<UserToOrderInput[]>;
}

export interface ActiveShiftEntity {
	__typename?: "ActiveShiftEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	place?: Maybe<PlaceEntity>;
	shiftDate: Scalars["DateTime"]["output"];
	tablesToShift?: Maybe<TableToShiftEntity[]>;
	updatedAt: Scalars["DateTime"]["output"];
	user?: Maybe<UserEntity>;
}

export interface ActiveShiftInput {
	place?: InputMaybe<PlaceInput>;
	shiftDate: Scalars["DateTime"]["input"];
	tablesToShift?: InputMaybe<TableToShiftInput[]>;
	user?: InputMaybe<UserInput>;
}

export interface AddCommentToOrderInput {
	comment: Scalars["String"]["input"];
	orderId: Scalars["String"]["input"];
}

export interface AddressToUserEntity {
	__typename?: "AddressToUserEntity";
	address: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	specificDetails?: Maybe<Scalars["String"]["output"]>;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
}

export interface AddressToUserInput {
	address: Scalars["String"]["input"];
	specificDetails?: InputMaybe<Scalars["String"]["input"]>;
	user: UserInput;
}

export interface AllergenEntity {
	__typename?: "AllergenEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	productsToAllergen?: Maybe<AllergenToProductEntity[]>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AllergenInput {
	name: Scalars["String"]["input"];
	place: PlaceInput;
	productsToAllergen?: InputMaybe<AllergenToProductInput[]>;
}

export interface AllergenToProductEntity {
	__typename?: "AllergenToProductEntity";
	allergen: AllergenEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	product: ProductEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AllergenToProductInput {
	allergen: AllergenInput;
	product: ProductInput;
}

export interface ApplyCouponInput {
	id: Scalars["String"]["input"];
	verificationCode: Scalars["Float"]["input"];
}

export interface ArticleEntity {
	__typename?: "ArticleEntity";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	slug: Scalars["String"]["output"];
	template?: Maybe<Scalars["JSONObject"]["output"]>;
	type: ArticleTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ArticleInput {
	description: Scalars["String"]["input"];
	image?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	slug: Scalars["String"]["input"];
	template?: InputMaybe<Scalars["JSONObject"]["input"]>;
	type: ArticleTypeEnum;
}

export enum ArticleTypeEnum {
	TopPlaces = "TOP_PLACES"
}

export interface AttributeEntity {
	__typename?: "AttributeEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	attributesGroupsToAttribute?: Maybe<AttributeToAttributesGroupEntity[]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	price: Scalars["Float"]["output"];
	productsToOrdersToAttribute?: Maybe<AttributeToProductToOrderEntity[]>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AttributeToAttributesGroupEntity {
	__typename?: "AttributeToAttributesGroupEntity";
	attribute: AttributeEntity;
	attributesGroup: AttributesGroupEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AttributeToAttributesGroupInput {
	attribute: AttributesInput;
	attributesGroup: AttributesGroupInput;
}

export interface AttributeToProductToOrderEntity {
	__typename?: "AttributeToProductToOrderEntity";
	attribute: AttributeEntity;
	count: Scalars["Int"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	productToOrder: ProductToOrderEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AttributeToProductToOrderInput {
	attribute: AttributesInput;
	count: Scalars["Int"]["input"];
	productToOrder: ProductToOrderInput;
}

export interface AttributesGroupEntity {
	__typename?: "AttributesGroupEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	attributesToAttributesGroup?: Maybe<AttributeToAttributesGroupEntity[]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	maxItemsForPick: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	type: AttributesGroupTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AttributesGroupInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	attributesToAttributesGroup?: InputMaybe<AttributeToAttributesGroupInput[]>;
	maxItemsForPick: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	place: PlaceInput;
	type: AttributesGroupTypeEnum;
}

export interface AttributesGroupToProductEntity {
	__typename?: "AttributesGroupToProductEntity";
	attributesGroup: AttributesGroupEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	isRequired: Scalars["Boolean"]["output"];
	maxItemsToPick: Scalars["Int"]["output"];
	minItemsToPick: Scalars["Int"]["output"];
	product: ProductEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AttributesGroupToProductInput {
	attributesGroup: AttributesGroupInput;
	isRequired: Scalars["Boolean"]["input"];
	maxItemsToPick: Scalars["Int"]["input"];
	minItemsToPick: Scalars["Int"]["input"];
	product: ProductInput;
}

export enum AttributesGroupTypeEnum {
	Add = "ADD",
	Remove = "REMOVE"
}

export interface AttributesInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	attributesGroupsToAttribute?: InputMaybe<AttributeToAttributesGroupInput[]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	price: Scalars["Float"]["input"];
	productsToOrdersToAttribute?: InputMaybe<AttributeToProductToOrderInput[]>;
}

export interface CategoryEntity {
	__typename?: "CategoryEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	bonusPercent?: Maybe<Scalars["Float"]["output"]>;
	childCategories?: Maybe<NestedCategoryEntity[]>;
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	discountPercent?: Maybe<Scalars["Float"]["output"]>;
	endAvailableTime: Scalars["Int"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	isHidden: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	parentCategories?: Maybe<NestedCategoryEntity[]>;
	paymentSystem?: Maybe<PaymentSystemToPlaceEntity>;
	place: PlaceEntity;
	position: Scalars["Int"]["output"];
	products?: Maybe<ProductEntity[]>;
	slug: Scalars["String"]["output"];
	startAvailableTime: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface CategoryInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	childCategories?: InputMaybe<NestedCategoryInput[]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime: Scalars["Int"]["input"];
	image?: InputMaybe<FileInput>;
	isHidden: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
	parentCategories?: InputMaybe<NestedCategoryInput[]>;
	paymentSystem?: InputMaybe<PaymentSystemToPlaceInput>;
	place: PlaceInput;
	position: Scalars["Int"]["input"];
	products?: InputMaybe<ProductInput[]>;
	slug: Scalars["String"]["input"];
	startAvailableTime: Scalars["Int"]["input"];
}

export enum ChatCompletionRequestMessageRoleEnum {
	Assistant = "Assistant",
	System = "System",
	User = "User"
}

export interface ChatGptMessage {
	__typename?: "ChatGPTMessage";
	content: Scalars["String"]["output"];
	role: ChatCompletionRequestMessageRoleEnum;
}

export interface ChatGptMessageInput {
	content: Scalars["String"]["input"];
	role: ChatCompletionRequestMessageRoleEnum;
}

export interface ChatbotEntity {
	__typename?: "ChatbotEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: ChatbotEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export enum ChatbotEnum {
	Chatgpt = "CHATGPT"
}

export interface ChatbotInput {
	name: ChatbotEnum;
}

export interface ChatbotToPlaceEntity {
	__typename?: "ChatbotToPlaceEntity";
	chatbot: ChatbotEntity;
	chatbotFields?: Maybe<Scalars["JSONObject"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ChatbotToPlaceInput {
	chatbot: ChatbotInput;
	chatbotFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	place: PlaceInput;
}

export interface CommandEntity {
	__typename?: "CommandEntity";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface CommandInput {
	description: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	place: PlaceInput;
}

export interface CommentToOrderEntity {
	__typename?: "CommentToOrderEntity";
	comment: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	order: ActiveOrderEntity;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
}

export interface CommentToOrderInput {
	comment: Scalars["String"]["input"];
	createdAt: Scalars["DateTime"]["input"];
	order: ActiveOrderInput;
	user: UserInput;
}

export interface CompanyEntity {
	__typename?: "CompanyEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	isHidden: Scalars["Boolean"]["output"];
	logo?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	owner: UserEntity;
	places?: Maybe<PlaceEntity[]>;
	status: CompanyStatusEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface CompanyInput {
	isHidden: Scalars["Boolean"]["input"];
	logo?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	owner: UserInput;
	places?: InputMaybe<PlaceInput[]>;
	status: CompanyStatusEnum;
}

export enum CompanyStatusEnum {
	Approved = "APPROVED",
	Pending = "PENDING",
	Rejected = "REJECTED"
}

export interface ConfirmProductToOrderInput {
	attributesIds?: InputMaybe<Scalars["String"]["input"][]>;
	comment?: InputMaybe<Scalars["String"]["input"]>;
	count: Scalars["Float"]["input"];
	orderId: Scalars["String"]["input"];
	productId: Scalars["String"]["input"];
}

export interface ConnectAccountingSystemToPlaceInput {
	accountingSystem: Scalars["String"]["input"];
	accountingSystemFields: Scalars["JSONObject"]["input"];
	place: Scalars["String"]["input"];
}

export interface ConnectChatbotToPlaceInput {
	chatbot: Scalars["String"]["input"];
	chatbotFields: Scalars["JSONObject"]["input"];
	place: Scalars["String"]["input"];
}

export interface ConnectPaymentSystemToPlaceInput {
	categories?: InputMaybe<Scalars["String"]["input"][]>;
	isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	paymentSystem: Scalars["String"]["input"];
	paymentSystemFields: Scalars["JSONObject"]["input"];
	place: Scalars["String"]["input"];
}

export interface ContactEntity {
	__typename?: "ContactEntity";
	createdAt: Scalars["DateTime"]["output"];
	icon?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
	value: Scalars["String"]["output"];
}

export interface ContactsInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	value: Scalars["String"]["input"];
}

export interface CouponEntity {
	__typename?: "CouponEntity";
	createdAt: Scalars["DateTime"]["output"];
	expiresAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
	usersToCoupons?: Maybe<CouponToUserEntity[]>;
}

export interface CouponInput {
	expiresAt: Scalars["DateTime"]["input"];
	image?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	usersToCoupons?: InputMaybe<CouponToUserInput[]>;
}

export interface CouponToUserEntity {
	__typename?: "CouponToUserEntity";
	coupon: CouponEntity;
	createdAt: Scalars["DateTime"]["output"];
	expiredAt?: Maybe<Scalars["DateTime"]["output"]>;
	id: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	usedAt?: Maybe<Scalars["DateTime"]["output"]>;
	user: UserEntity;
}

export interface CouponToUserInput {
	coupon: CouponInput;
	expiredAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	usedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	user: UserInput;
}

export interface CreateAccountingSystemInput {
	name: AccountingSystemEnum;
}

export interface CreateAddressInput {
	address: Scalars["String"]["input"];
	specificDetails?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CreateAllergenInput {
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateArticleInput {
	description: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	type?: InputMaybe<ArticleTypeEnum>;
}

export interface CreateAttributeInput {
	attributesGroup: Scalars["String"]["input"][];
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	price: Scalars["Float"]["input"];
}

export interface CreateAttributesGroupInput {
	attributes?: InputMaybe<Scalars["String"]["input"][]>;
	maxItemsForPick: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	type: AttributesGroupTypeEnum;
}

export interface CreateCategoryInput {
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	childCategories?: InputMaybe<Scalars["String"]["input"][]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	parentCategories?: InputMaybe<Scalars["String"]["input"][]>;
	paymentSystem?: InputMaybe<Scalars["String"]["input"]>;
	place: Scalars["String"]["input"];
	position?: InputMaybe<Scalars["Int"]["input"]>;
	startAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface CreateChatCompletionInput {
	messages?: InputMaybe<ChatGptMessageInput[]>;
	place: Scalars["String"]["input"];
}

export interface CreateChatbotInput {
	name: ChatbotEnum;
}

export interface CreateCommandInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateCompanyInput {
	logo?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface CreateCompletionInput {
	place: Scalars["String"]["input"];
	prompt?: InputMaybe<Scalars["JSONObject"]["input"]>;
}

export interface CreateContactInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	value: Scalars["String"]["input"];
}

export interface CreateCorporateOrderInput {
	office: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	type: OrderTypeEnum;
}

export interface CreateCouponInput {
	expiresAt: Scalars["DateTime"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateHallInput {
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateInfoBlockInput {
	description: Scalars["String"]["input"];
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateNewsInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateNotificationInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	emitDate: Scalars["DateTime"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	type: NotificationTypeEnum;
}

export interface CreateOrderInput {
	asapProcessTime?: InputMaybe<Scalars["Boolean"]["input"]>;
	comments?: InputMaybe<Scalars["String"]["input"]>;
	deliveryAddress?: InputMaybe<Scalars["String"]["input"]>;
	place: Scalars["String"]["input"];
	productsToOrder?: InputMaybe<CreateProductToOrderInput[]>;
	startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	table?: InputMaybe<Scalars["String"]["input"]>;
	tableCode?: InputMaybe<Scalars["Float"]["input"]>;
	type: OrderTypeEnum;
}

export interface CreatePaymentSystemInput {
	name: PaymentSystemEnum;
}

export interface CreatePlaceInput {
	a11y?: InputMaybe<Scalars["JSONObject"]["input"]>;
	address?: InputMaybe<Scalars["String"]["input"]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	company: Scalars["String"]["input"];
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	logo?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	type?: PlaceTypeEnum;
	weekdayEnd?: InputMaybe<Scalars["String"]["input"]>;
	weekdayStart?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CreatePlaceToTypeInput {
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	deliveryMaxDistance?: InputMaybe<Scalars["Int"]["input"]>;
	deliveryType?: InputMaybe<PlaceDeliveryTypeEnum>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
	place: Scalars["String"]["input"];
	prePayment?: InputMaybe<Scalars["Boolean"]["input"]>;
	startAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
	type: OrderTypeEnum;
}

export interface CreateProductInput {
	allergens?: InputMaybe<Scalars["String"]["input"][]>;
	attributesGroups?: InputMaybe<Scalars["String"]["input"][]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	category: Scalars["String"]["input"];
	childPairings?: InputMaybe<Scalars["String"]["input"][]>;
	cookingTime?: InputMaybe<Scalars["Int"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	parentPairings?: InputMaybe<Scalars["String"]["input"][]>;
	position?: InputMaybe<Scalars["Int"]["input"]>;
	price?: InputMaybe<Scalars["Float"]["input"]>;
	tags?: InputMaybe<Scalars["String"]["input"][]>;
}

export interface CreateProductToOrderInput {
	attributesIds?: InputMaybe<Scalars["String"]["input"][]>;
	comment?: InputMaybe<Scalars["String"]["input"]>;
	count: Scalars["Int"]["input"];
	productId: Scalars["String"]["input"];
}

export interface CreateProductToSetInput {
	productId: Scalars["String"]["input"];
}

export interface CreatePromotionInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateQrCodeInput {
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	table?: InputMaybe<Scalars["String"]["input"]>;
	url: Scalars["String"]["input"];
}

export interface CreateReelInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	link?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
}

export interface CreateRequestInput {
	from: Scalars["String"]["input"];
	to: Scalars["String"]["input"];
	type: RequestTypeEnum;
}

export interface CreateReviewInput {
	comment: Scalars["String"]["input"];
	order?: InputMaybe<Scalars["String"]["input"]>;
	place: Scalars["String"]["input"];
	rating: Scalars["Float"]["input"];
}

export interface CreateSetInput {
	autoGenerate?: Scalars["Boolean"]["input"];
	description?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	productsToSet?: InputMaybe<CreateProductToSetInput[]>;
}

export interface CreateShiftInput {
	place?: InputMaybe<Scalars["String"]["input"]>;
	tables: Scalars["String"]["input"][];
}

export interface CreateSocialNetworkInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	url: Scalars["String"]["input"];
}

export interface CreateStopListInput {
	count: Scalars["Float"]["input"];
	product: Scalars["String"]["input"];
}

export interface CreateTableInput {
	code?: InputMaybe<Scalars["Int"]["input"]>;
	hall: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface CreateTagInput {
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	type: TagTypeEnum;
}

export interface CreateTagToPlaceInput {
	place: Scalars["String"]["input"];
	tag: Scalars["String"]["input"];
}

export interface CreateUserInput {
	email: Scalars["String"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CreateUserToPlaceInput {
	place: Scalars["String"]["input"];
	role: UserToPlaceRoleEnum;
	user: Scalars["String"]["input"];
}

export enum CustomerTypeEnum {
	Corporate = "CORPORATE",
	Individual = "INDIVIDUAL"
}

export interface EntityTranslation {
	__typename?: "EntityTranslation";
	en?: Maybe<Scalars["JSONObject"]["output"]>;
	origin?: Maybe<Scalars["JSONObject"]["output"]>;
	ru?: Maybe<Scalars["JSONObject"]["output"]>;
	uk?: Maybe<Scalars["JSONObject"]["output"]>;
}

export interface EntityTranslationInput {
	en?: InputMaybe<Scalars["JSONObject"]["input"]>;
	origin?: InputMaybe<Scalars["JSONObject"]["input"]>;
	ru?: InputMaybe<Scalars["JSONObject"]["input"]>;
	uk?: InputMaybe<Scalars["JSONObject"]["input"]>;
}

export interface FileEntity {
	__typename?: "FileEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	sourceUrl?: Maybe<Scalars["String"]["output"]>;
	updatedAt: Scalars["DateTime"]["output"];
	url: Scalars["String"]["output"];
}

export interface FileInput {
	sourceUrl?: InputMaybe<Scalars["String"]["input"]>;
	url: Scalars["String"]["input"];
}

export interface FiltersArgsDto {
	key: Scalars["String"]["input"];
	operator: Scalars["String"]["input"];
	value: Scalars["String"]["input"];
}

export interface ForgotPasswordInput {
	email?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface GetMerchantLoginAndCodeLinkDto {
	account: Scalars["String"]["input"];
}

export interface GetPlaceStatistic2Type {
	__typename?: "GetPlaceStatistic2Type";
	coupons: Scalars["Int"]["output"];
	customers: Scalars["Int"]["output"];
	employees: Scalars["Int"]["output"];
	reels: Scalars["Int"]["output"];
}

export interface GetPlaceStatisticType {
	__typename?: "GetPlaceStatisticType";
	employees: Scalars["Int"]["output"];
	guests: Scalars["Int"]["output"];
	halls: Scalars["Int"]["output"];
	ordersToRate: Scalars["JSONObject"]["output"];
	tables: Scalars["Int"]["output"];
	tax: Scalars["Float"]["output"];
	totalAmount: Scalars["Float"]["output"];
}

export interface HallEntity {
	__typename?: "HallEntity";
	accountingSystemFields: Scalars["JSONObject"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	isHidden: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	position: Scalars["Int"]["output"];
	slug: Scalars["String"]["output"];
	tables?: Maybe<TableEntity[]>;
	terminal?: Maybe<TerminalEntity>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface HallInput {
	accountingSystemFields: Scalars["JSONObject"]["input"];
	image?: InputMaybe<FileInput>;
	isHidden: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
	place: PlaceInput;
	position: Scalars["Int"]["input"];
	slug: Scalars["String"]["input"];
	tables?: InputMaybe<TableInput[]>;
	terminal?: InputMaybe<TerminalInput>;
}

export interface HistoryNotificationEntity {
	__typename?: "HistoryNotificationEntity";
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	emitDate: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	image?: Maybe<Scalars["JSONObject"]["output"]>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	type: NotificationTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface HistoryNotificationInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	emitDate: Scalars["DateTime"]["input"];
	image?: InputMaybe<Scalars["JSONObject"]["input"]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	type: NotificationTypeEnum;
}

export interface HistoryOrderEntity {
	__typename?: "HistoryOrderEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	commentsToOrder?: Maybe<Scalars["JSONObject"]["output"][]>;
	createdAt: Scalars["DateTime"]["output"];
	deliveryAddress?: Maybe<Scalars["String"]["output"]>;
	deliveryTime?: Maybe<Scalars["String"]["output"]>;
	discountApplied?: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	position: Scalars["Int"]["output"];
	productsToOrders?: Maybe<Scalars["JSONObject"]["output"][]>;
	reviews?: Maybe<ReviewEntity[]>;
	startDate?: Maybe<Scalars["DateTime"]["output"]>;
	status: OrderStatusEnum;
	syncOrder: Scalars["Boolean"]["output"];
	table?: Maybe<Scalars["JSONObject"]["output"]>;
	totalPrice: Scalars["Float"]["output"];
	type: OrderTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
	usersToOrder?: Maybe<Scalars["JSONObject"]["output"][]>;
}

export interface HistoryOrderInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	commentsToOrder?: InputMaybe<Scalars["JSONObject"]["input"][]>;
	createdAt: Scalars["DateTime"]["input"];
	deliveryAddress?: InputMaybe<Scalars["String"]["input"]>;
	deliveryTime?: InputMaybe<Scalars["String"]["input"]>;
	discountApplied?: InputMaybe<Scalars["Float"]["input"]>;
	place: PlaceInput;
	position: Scalars["Int"]["input"];
	productsToOrders?: InputMaybe<Scalars["JSONObject"]["input"][]>;
	reviews?: InputMaybe<ReviewInput[]>;
	startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	status: OrderStatusEnum;
	syncOrder: Scalars["Boolean"]["input"];
	table?: InputMaybe<Scalars["JSONObject"]["input"]>;
	type: OrderTypeEnum;
	usersToOrder?: InputMaybe<Scalars["JSONObject"]["input"][]>;
}

export interface HistoryShiftEntity {
	__typename?: "HistoryShiftEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	shiftDateEnd: Scalars["DateTime"]["output"];
	shiftDateStart: Scalars["DateTime"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface HistoryShiftInput {
	shiftDateEnd: Scalars["DateTime"]["input"];
	shiftDateStart: Scalars["DateTime"]["input"];
}

export interface InfoBlockEntity {
	__typename?: "InfoBlockEntity";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	icon?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface InfoBlocksInput {
	description: Scalars["String"]["input"];
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
}

export interface InitSyrveDto {
	apiLogin: Scalars["String"]["input"];
	organizationId: Scalars["String"]["input"];
}

export interface LanguageEntity {
	__typename?: "LanguageEntity";
	createdAt: Scalars["DateTime"]["output"];
	file?: Maybe<FileEntity>;
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface Link {
	__typename?: "Link";
	link: Scalars["String"]["output"];
}

export interface LoginInput {
	deviceId?: InputMaybe<Scalars["String"]["input"]>;
	phone: Scalars["String"]["input"];
}

export enum ManualPaymentEnum {
	Cash = "CASH",
	Terminal = "TERMINAL"
}

export interface Mutation {
	__typename?: "Mutation";
	addAddressToOrder: ActiveOrderEntity;
	addCommentToOrder: CommentToOrderEntity;
	addTableToOrder: ActiveOrderEntity;
	addUserAddress: AddressToUserEntity;
	addUserToOrder: ActiveOrderEntity;
	addUserToPlace: UserToPlaceEntity;
	applyCoupon: CouponToUserEntity;
	approveOrder: ActiveOrderEntity;
	approveProductsInOrder: ProductToOrderEntity[];
	cancelOrder: Scalars["String"]["output"];
	closeOrder: Scalars["String"]["output"];
	closeShift: Scalars["String"]["output"];
	confirmProductsToOrders: ActiveOrderEntity;
	connectAccountingSystemToPlace: AccountingSystemToPlaceEntity;
	connectChatbotToPlace: ChatbotToPlaceEntity;
	connectPaymentSystemToPlace: PaymentSystemToPlaceEntity;
	connectToPlace: UserToPlaceEntity;
	createAccountingSystem: AccountingSystemEntity;
	createAllergen: AllergenEntity;
	createArticle: ArticleEntity;
	createAttribute: AttributeEntity;
	createAttributesGroup: AttributesGroupEntity;
	createCategory: CategoryEntity;
	createChatCompletion?: Maybe<ChatGptMessage>;
	createChatbot: ChatbotEntity;
	createCommand: CommandEntity;
	createCompany: CompanyEntity;
	createCompletion?: Maybe<ChatGptMessage>;
	createContact: ContactEntity;
	createCorporateOrder: ActiveOrderEntity;
	createCoupon: CouponEntity;
	createHall: HallEntity;
	createInfoBlock: InfoBlockEntity;
	createNews: NewsEntity;
	createNotification: ActiveNotificationEntity;
	createOrder: ActiveOrderEntity;
	createPaymentOrderLinks: Scalars["String"]["output"][];
	createPaymentSystem: PaymentSystemEntity;
	createPlace: PlaceEntity;
	createPlaceToType: TypeToPlaceEntity;
	createProduct: ProductEntity;
	createPromotion: PromotionEntity;
	createQrCode: QrCodeEntity;
	createReel: ReelEntity;
	createRequest: RequestEntity;
	createReview: ReviewEntity;
	createSession?: Maybe<Scalars["String"]["output"]>;
	createSet: SetEntity;
	createShift: ActiveShiftEntity;
	createSocialNetwork: SocialNetworkEntity;
	createStopList: StopListEntity;
	createTable: TableEntity;
	createTag: TagEntity;
	createTagToPlace: TagToPlaceEntity;
	createUser: UserEntity;
	deleteAccountingSystem: Scalars["String"]["output"];
	deleteAllergen: Scalars["String"]["output"];
	deleteArticle: Scalars["String"]["output"];
	deleteAttribute: Scalars["String"]["output"];
	deleteAttributesGroup: Scalars["String"]["output"];
	deleteCategory: Scalars["String"]["output"];
	deleteChatbot: Scalars["String"]["output"];
	deleteCommand: Scalars["String"]["output"];
	deleteCompany: Scalars["String"]["output"];
	deleteContact: Scalars["String"]["output"];
	deleteCoupon: Scalars["String"]["output"];
	deleteHall: Scalars["String"]["output"];
	deleteInfoBlock: Scalars["String"]["output"];
	deleteMe: Scalars["String"]["output"];
	deleteNews: Scalars["String"]["output"];
	deleteNotification: Scalars["String"]["output"];
	deleteOrder: Scalars["String"]["output"];
	deletePartnership: Scalars["String"]["output"];
	deletePaymentSystem: Scalars["String"]["output"];
	deletePlace: Scalars["String"]["output"];
	deletePlaceToType: Scalars["String"]["output"];
	deleteProduct: Scalars["String"]["output"];
	deleteProductToOrder: Scalars["String"]["output"];
	deletePromotion: Scalars["String"]["output"];
	deleteQrCode: Scalars["String"]["output"];
	deleteReel: Scalars["String"]["output"];
	deleteRequest: RequestEntity;
	deleteReview: Scalars["String"]["output"];
	deleteSet: Scalars["String"]["output"];
	deleteShift: Scalars["String"]["output"];
	deleteSocialNetwork: Scalars["String"]["output"];
	deleteStopList: Scalars["String"]["output"];
	deleteTable: Scalars["String"]["output"];
	deleteTag: Scalars["String"]["output"];
	deleteTagToPlace: Scalars["String"]["output"];
	deleteUser: Scalars["String"]["output"];
	disconnectAccountingSystemFromPlace: Scalars["String"]["output"];
	disconnectChatbotFromPlace: Scalars["String"]["output"];
	disconnectPaymentSystemFromPlace: Scalars["String"]["output"];
	emitCommand: Scalars["String"]["output"];
	forgotPassword: Scalars["String"]["output"];
	getMerchantLoginAndCodeLink: Link;
	getTableByCode: TableEntity;
	initSyrve: Scalars["String"]["output"];
	login: AccessToken;
	regenerateSet: Scalars["String"]["output"];
	rejectOrder: ActiveOrderEntity;
	rejectProductsInOrder: ProductToOrderEntity[];
	removeTableFromOrder: ActiveOrderEntity;
	removeUserFromPlace: Scalars["String"]["output"];
	resetPassword: AccessToken;
	saveCoupon: CouponToUserEntity;
	sendAgain: Scalars["String"]["output"];
	sendOrder: ActiveOrderEntity;
	setCourierOnTheWayStatus: ActiveOrderEntity;
	setManualPayForProductsInOrder: ProductToOrderEntity[];
	setPaidStatusForProductsInOrder: ProductToOrderEntity[];
	setRemotePayForProductsInOrder: ProductToOrderEntity[];
	setWaitingForCourierStatus: ActiveOrderEntity;
	signIn: AccessToken;
	signInTelegram: AccessToken;
	signUp: AccessToken;
	signUpTelegram: AccessToken;
	syncOrder: Scalars["String"]["output"];
	syncPoster: Scalars["String"]["output"];
	syncSyrve: Scalars["String"]["output"];
	syncTranslates: Scalars["String"]["output"];
	telegram: AccessToken;
	toggleLike?: Maybe<UserToProductEntity>;
	togglePlaceLike?: Maybe<UserToPlaceEntity>;
	toggleSyncOrder: ActiveOrderEntity;
	updateAccountingSystem: AccountingSystemEntity;
	updateAccountingSystemToPlace: AccountingSystemToPlaceEntity;
	updateAllergen: AllergenEntity;
	updateArticle: ArticleEntity;
	updateAttribute: AttributeEntity;
	updateAttributesGroup: AttributesGroupEntity;
	updateCategories: CategoryEntity[];
	updateCategory: CategoryEntity;
	updateChatbot: ChatbotEntity;
	updateChatbotToPlace: ChatbotToPlaceEntity;
	updateCommand: CommandEntity;
	updateCommentToOrder: CommentToOrderEntity;
	updateCompany: CompanyEntity;
	updateContact: ContactEntity;
	updateCoupon: CouponEntity;
	updateDeliveryTime: ActiveOrderEntity;
	updateHall: HallEntity;
	updateInfoBlock: InfoBlockEntity;
	updateMe: UserEntity;
	updateNews: NewsEntity;
	updateNotification: ActiveNotificationEntity;
	updateOrder: ActiveOrderEntity;
	updatePaymentSystem: PaymentSystemEntity;
	updatePaymentSystemToPlace: PaymentSystemToPlaceEntity;
	updatePermissions: AccessToken;
	updatePlace: PlaceEntity;
	updatePlaceToType: TypeToPlaceEntity;
	updatePlaceVerification: PlaceEntity;
	updateProduct: ProductEntity;
	updateProducts: ProductEntity[];
	updatePromotion: PromotionEntity;
	updateQrCode: QrCodeEntity;
	updateReel: ReelEntity;
	updateRequest: RequestEntity;
	updateSet: SetEntity;
	updateShift: ActiveShiftEntity;
	updateSocialNetwork: SocialNetworkEntity;
	updateStopList: StopListEntity;
	updateTable: TableEntity;
	updateTag: TagEntity;
	updateTagToPlace: TagToPlaceEntity;
	updateTranslates: Scalars["String"]["output"];
	updateUser: UserEntity;
	updateUserAddress: AddressToUserEntity;
	updateUserToPlace: UserToPlaceEntity;
	verifyCode: AccessToken;
	viewReel: ReelEntity;
}

export interface MutationAddAddressToOrderArgs {
	deliveryAddress: Scalars["String"]["input"];
	orderId: Scalars["String"]["input"];
}

export interface MutationAddCommentToOrderArgs {
	data: AddCommentToOrderInput;
}

export interface MutationAddTableToOrderArgs {
	orderId: Scalars["String"]["input"];
	tableId: Scalars["String"]["input"];
}

export interface MutationAddUserAddressArgs {
	data: CreateAddressInput;
}

export interface MutationAddUserToOrderArgs {
	code: Scalars["Int"]["input"];
	productsToOrders?: InputMaybe<ConfirmProductToOrderInput[]>;
}

export interface MutationAddUserToPlaceArgs {
	data: CreateUserToPlaceInput;
}

export interface MutationApplyCouponArgs {
	coupon: ApplyCouponInput;
}

export interface MutationApproveOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationApproveProductsInOrderArgs {
	productToOrderIds: Scalars["String"]["input"][];
}

export interface MutationCancelOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationCloseOrderArgs {
	orderId: Scalars["String"]["input"];
	silence?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export interface MutationCloseShiftArgs {
	shiftId: Scalars["String"]["input"];
}

export interface MutationConfirmProductsToOrdersArgs {
	productsToOrders: ConfirmProductToOrderInput[];
}

export interface MutationConnectAccountingSystemToPlaceArgs {
	body: ConnectAccountingSystemToPlaceInput;
}

export interface MutationConnectChatbotToPlaceArgs {
	body: ConnectChatbotToPlaceInput;
}

export interface MutationConnectPaymentSystemToPlaceArgs {
	body: ConnectPaymentSystemToPlaceInput;
}

export interface MutationConnectToPlaceArgs {
	accessCode: Scalars["Float"]["input"];
}

export interface MutationCreateAccountingSystemArgs {
	accountingSystem: CreateAccountingSystemInput;
}

export interface MutationCreateAllergenArgs {
	allergen: CreateAllergenInput;
}

export interface MutationCreateArticleArgs {
	article: CreateArticleInput;
}

export interface MutationCreateAttributeArgs {
	attribute: CreateAttributeInput;
}

export interface MutationCreateAttributesGroupArgs {
	attributesGroup: CreateAttributesGroupInput;
}

export interface MutationCreateCategoryArgs {
	category: CreateCategoryInput;
}

export interface MutationCreateChatCompletionArgs {
	chatCompletion: CreateChatCompletionInput;
}

export interface MutationCreateChatbotArgs {
	chatbot: CreateChatbotInput;
}

export interface MutationCreateCommandArgs {
	command: CreateCommandInput;
}

export interface MutationCreateCompanyArgs {
	company: CreateCompanyInput;
}

export interface MutationCreateCompletionArgs {
	completion: CreateCompletionInput;
}

export interface MutationCreateContactArgs {
	contact: CreateContactInput;
}

export interface MutationCreateCorporateOrderArgs {
	corporateOrder: CreateCorporateOrderInput;
}

export interface MutationCreateCouponArgs {
	coupon: CreateCouponInput;
}

export interface MutationCreateHallArgs {
	hall: CreateHallInput;
}

export interface MutationCreateInfoBlockArgs {
	infoBlock: CreateInfoBlockInput;
}

export interface MutationCreateNewsArgs {
	news: CreateNewsInput;
}

export interface MutationCreateNotificationArgs {
	notification: CreateNotificationInput;
}

export interface MutationCreateOrderArgs {
	order: CreateOrderInput;
}

export interface MutationCreatePaymentOrderLinksArgs {
	productsToOrders: Scalars["String"]["input"][];
}

export interface MutationCreatePaymentSystemArgs {
	paymentSystem: CreatePaymentSystemInput;
}

export interface MutationCreatePlaceArgs {
	place: CreatePlaceInput;
}

export interface MutationCreatePlaceToTypeArgs {
	data: CreatePlaceToTypeInput;
}

export interface MutationCreateProductArgs {
	product: CreateProductInput;
}

export interface MutationCreatePromotionArgs {
	promotion: CreatePromotionInput;
}

export interface MutationCreateQrCodeArgs {
	qrCode: CreateQrCodeInput;
}

export interface MutationCreateReelArgs {
	reel: CreateReelInput;
}

export interface MutationCreateRequestArgs {
	request: CreateRequestInput;
}

export interface MutationCreateReviewArgs {
	review: CreateReviewInput;
}

export interface MutationCreateSessionArgs {
	session: Scalars["String"]["input"];
	sessionId: Scalars["String"]["input"];
}

export interface MutationCreateSetArgs {
	set: CreateSetInput;
}

export interface MutationCreateShiftArgs {
	shift: CreateShiftInput;
}

export interface MutationCreateSocialNetworkArgs {
	socialNetwork: CreateSocialNetworkInput;
}

export interface MutationCreateStopListArgs {
	stopList: CreateStopListInput;
}

export interface MutationCreateTableArgs {
	table: CreateTableInput;
}

export interface MutationCreateTagArgs {
	tag: CreateTagInput;
}

export interface MutationCreateTagToPlaceArgs {
	tagToPlace: CreateTagToPlaceInput;
}

export interface MutationCreateUserArgs {
	user: CreateUserInput;
}

export interface MutationDeleteAccountingSystemArgs {
	accountingSystemId: Scalars["String"]["input"];
}

export interface MutationDeleteAllergenArgs {
	allergenId: Scalars["String"]["input"];
}

export interface MutationDeleteArticleArgs {
	articleId: Scalars["String"]["input"];
}

export interface MutationDeleteAttributeArgs {
	attributeId: Scalars["String"]["input"];
}

export interface MutationDeleteAttributesGroupArgs {
	attributesGroupId: Scalars["String"]["input"];
}

export interface MutationDeleteCategoryArgs {
	categoryId: Scalars["String"]["input"];
}

export interface MutationDeleteChatbotArgs {
	chatbotId: Scalars["String"]["input"];
}

export interface MutationDeleteCommandArgs {
	commandId: Scalars["String"]["input"];
}

export interface MutationDeleteCompanyArgs {
	companyId: Scalars["String"]["input"];
}

export interface MutationDeleteContactArgs {
	contactId: Scalars["String"]["input"];
}

export interface MutationDeleteCouponArgs {
	couponId: Scalars["String"]["input"];
}

export interface MutationDeleteHallArgs {
	hallId: Scalars["String"]["input"];
}

export interface MutationDeleteInfoBlockArgs {
	infoBlockId: Scalars["String"]["input"];
}

export interface MutationDeleteNewsArgs {
	newsId: Scalars["String"]["input"];
}

export interface MutationDeleteNotificationArgs {
	notificationId: Scalars["String"]["input"];
}

export interface MutationDeleteOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationDeletePartnershipArgs {
	partnershipId: Scalars["String"]["input"];
}

export interface MutationDeletePaymentSystemArgs {
	paymentSystemId: Scalars["String"]["input"];
}

export interface MutationDeletePlaceArgs {
	placeId: Scalars["String"]["input"];
}

export interface MutationDeletePlaceToTypeArgs {
	placeToTypeId: Scalars["String"]["input"];
}

export interface MutationDeleteProductArgs {
	productId: Scalars["String"]["input"];
}

export interface MutationDeleteProductToOrderArgs {
	productToOrderId: Scalars["String"]["input"];
}

export interface MutationDeletePromotionArgs {
	promotionId: Scalars["String"]["input"];
}

export interface MutationDeleteQrCodeArgs {
	qrCodeId: Scalars["String"]["input"];
}

export interface MutationDeleteReelArgs {
	reelId: Scalars["String"]["input"];
}

export interface MutationDeleteRequestArgs {
	requestId: Scalars["String"]["input"];
}

export interface MutationDeleteReviewArgs {
	reviewId: Scalars["String"]["input"];
}

export interface MutationDeleteSetArgs {
	setId: Scalars["String"]["input"];
}

export interface MutationDeleteShiftArgs {
	shiftId: Scalars["String"]["input"];
}

export interface MutationDeleteSocialNetworkArgs {
	socialNetworkId: Scalars["String"]["input"];
}

export interface MutationDeleteStopListArgs {
	stopListId: Scalars["String"]["input"];
}

export interface MutationDeleteTableArgs {
	tableId: Scalars["String"]["input"];
}

export interface MutationDeleteTagArgs {
	tagId: Scalars["String"]["input"];
}

export interface MutationDeleteTagToPlaceArgs {
	tagToPlaceId: Scalars["String"]["input"];
}

export interface MutationDeleteUserArgs {
	userId: Scalars["String"]["input"];
}

export interface MutationDisconnectAccountingSystemFromPlaceArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDisconnectChatbotFromPlaceArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDisconnectPaymentSystemFromPlaceArgs {
	id: Scalars["String"]["input"];
}

export interface MutationEmitCommandArgs {
	commandId: Scalars["String"]["input"];
	orderId: Scalars["String"]["input"];
}

export interface MutationForgotPasswordArgs {
	body: ForgotPasswordInput;
}

export interface MutationGetMerchantLoginAndCodeLinkArgs {
	data: GetMerchantLoginAndCodeLinkDto;
	placeId: Scalars["String"]["input"];
}

export interface MutationGetTableByCodeArgs {
	code: Scalars["Float"]["input"];
	placeId: Scalars["String"]["input"];
}

export interface MutationInitSyrveArgs {
	data: InitSyrveDto;
	placeId: Scalars["String"]["input"];
}

export interface MutationLoginArgs {
	body: LoginInput;
}

export interface MutationRegenerateSetArgs {
	setId: Scalars["String"]["input"];
}

export interface MutationRejectOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationRejectProductsInOrderArgs {
	productToOrderIds: Scalars["String"]["input"][];
}

export interface MutationRemoveTableFromOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationRemoveUserFromPlaceArgs {
	userToPlaceId: Scalars["String"]["input"];
}

export interface MutationResetPasswordArgs {
	body: ResetPasswordInput;
}

export interface MutationSaveCouponArgs {
	couponId: Scalars["String"]["input"];
}

export interface MutationSendOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationSetCourierOnTheWayStatusArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationSetManualPayForProductsInOrderArgs {
	bonusCount?: InputMaybe<Scalars["Float"]["input"]>;
	manualPaymentType: ManualPaymentEnum;
	productToOrderIds: Scalars["String"]["input"][];
}

export interface MutationSetPaidStatusForProductsInOrderArgs {
	productToOrderIds: Scalars["String"]["input"][];
}

export interface MutationSetRemotePayForProductsInOrderArgs {
	bonusCount?: InputMaybe<Scalars["Float"]["input"]>;
	productToOrderIds: Scalars["String"]["input"][];
}

export interface MutationSetWaitingForCourierStatusArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationSignInArgs {
	body: SignInInput;
}

export interface MutationSignInTelegramArgs {
	sessionId?: InputMaybe<Scalars["String"]["input"]>;
	telegramId: Scalars["String"]["input"];
}

export interface MutationSignUpArgs {
	body: SignUpInput;
}

export interface MutationSignUpTelegramArgs {
	telegramUser: TelegramUserInput;
}

export interface MutationSyncOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface MutationSyncPosterArgs {
	placeId: Scalars["String"]["input"];
}

export interface MutationSyncSyrveArgs {
	placeId: Scalars["String"]["input"];
}

export interface MutationSyncTranslatesArgs {
	placeId: Scalars["String"]["input"];
}

export interface MutationTelegramArgs {
	telegramUser: TelegramUserInput;
}

export interface MutationToggleLikeArgs {
	productId: Scalars["String"]["input"];
}

export interface MutationTogglePlaceLikeArgs {
	placeId: Scalars["String"]["input"];
}

export interface MutationToggleSyncOrderArgs {
	id: Scalars["String"]["input"];
	syncOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export interface MutationUpdateAccountingSystemArgs {
	accountingSystem: UpdateAccountingSystemInput;
}

export interface MutationUpdateAccountingSystemToPlaceArgs {
	body: UpdateAccountingSystemToPlaceInput;
}

export interface MutationUpdateAllergenArgs {
	allergen: UpdateAllergenInput;
}

export interface MutationUpdateArticleArgs {
	article: UpdateArticleInput;
}

export interface MutationUpdateAttributeArgs {
	attribute: UpdateAttributeInput;
}

export interface MutationUpdateAttributesGroupArgs {
	attributesGroup: UpdateAttributesGroupInput;
}

export interface MutationUpdateCategoriesArgs {
	categories: UpdateCategoryInput[];
}

export interface MutationUpdateCategoryArgs {
	category: UpdateCategoryInput;
}

export interface MutationUpdateChatbotArgs {
	chatbot: UpdateChatbotInput;
}

export interface MutationUpdateChatbotToPlaceArgs {
	body: UpdateChatbotToPlaceInput;
}

export interface MutationUpdateCommandArgs {
	command: UpdateCommandInput;
}

export interface MutationUpdateCommentToOrderArgs {
	data: UpdateCommentToOrderInput;
}

export interface MutationUpdateCompanyArgs {
	company: UpdateCompanyInput;
}

export interface MutationUpdateContactArgs {
	contact: UpdateContactInput;
}

export interface MutationUpdateCouponArgs {
	coupon: UpdateCouponInput;
}

export interface MutationUpdateDeliveryTimeArgs {
	orderId: Scalars["String"]["input"];
	timeMin: Scalars["Float"]["input"];
}

export interface MutationUpdateHallArgs {
	hall: UpdateHallInput;
}

export interface MutationUpdateInfoBlockArgs {
	infoBlock: UpdateInfoBlockInput;
}

export interface MutationUpdateMeArgs {
	user: UpdateMeInput;
}

export interface MutationUpdateNewsArgs {
	news: UpdateNewsInput;
}

export interface MutationUpdateNotificationArgs {
	notification: UpdateNotificationInput;
}

export interface MutationUpdateOrderArgs {
	order: UpdateOrderInput;
}

export interface MutationUpdatePaymentSystemArgs {
	paymentSystem: UpdatePaymentSystemInput;
}

export interface MutationUpdatePaymentSystemToPlaceArgs {
	body: UpdatePaymentSystemToPlaceInput;
}

export interface MutationUpdatePermissionsArgs {
	body: UpdatePermissionsDto;
}

export interface MutationUpdatePlaceArgs {
	place: UpdatePlaceInput;
}

export interface MutationUpdatePlaceToTypeArgs {
	data: UpdatePlaceToTypeInput;
}

export interface MutationUpdatePlaceVerificationArgs {
	placeId: Scalars["String"]["input"];
	status: PlaceVerificationStatusEnum;
}

export interface MutationUpdateProductArgs {
	product: UpdateProductInput;
}

export interface MutationUpdateProductsArgs {
	products: UpdateProductInput[];
}

export interface MutationUpdatePromotionArgs {
	promotion: UpdatePromotionInput;
}

export interface MutationUpdateQrCodeArgs {
	qrCode: UpdateQrCodeInput;
}

export interface MutationUpdateReelArgs {
	reel: UpdateReelInput;
}

export interface MutationUpdateRequestArgs {
	request: UpdateRequestInput;
}

export interface MutationUpdateSetArgs {
	set: UpdateSetInput;
}

export interface MutationUpdateShiftArgs {
	shift: UpdateShiftInput;
}

export interface MutationUpdateSocialNetworkArgs {
	socialNetwork: UpdateSocialNetworkInput;
}

export interface MutationUpdateStopListArgs {
	stopList: UpdateStopListInput;
}

export interface MutationUpdateTableArgs {
	table: UpdateTableInput;
}

export interface MutationUpdateTagArgs {
	tag: UpdateTagInput;
}

export interface MutationUpdateTagToPlaceArgs {
	tagToPlace: UpdateTagToPlaceInput;
}

export interface MutationUpdateTranslatesArgs {
	data: TranslateByPlaceIdInput[];
	placeId: Scalars["String"]["input"];
}

export interface MutationUpdateUserArgs {
	user: UpdateUserInput;
}

export interface MutationUpdateUserAddressArgs {
	data: UpdateAddressInput;
}

export interface MutationUpdateUserToPlaceArgs {
	userToPlace: UpdateUserToPlaceInput;
}

export interface MutationVerifyCodeArgs {
	code: Scalars["Int"]["input"];
}

export interface MutationViewReelArgs {
	reelId: Scalars["String"]["input"];
}

export interface NestedCategoryEntity {
	__typename?: "NestedCategoryEntity";
	childCategory: CategoryEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	parentCategory: CategoryEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface NestedCategoryInput {
	childCategory: CategoryInput;
	parentCategory: CategoryInput;
}

export interface NewsEntity {
	__typename?: "NewsEntity";
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface NewsInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	slug: Scalars["String"]["input"];
}

export enum NotificationTypeEnum {
	DailyPost = "DAILY_POST",
	UsersLastOrderOffset = "USERS_LAST_ORDER_OFFSET"
}

export enum OrderEventEnum {
	AddressAdded = "ADDRESS_ADDED",
	Approved = "APPROVED",
	AutoCancelDeadline = "AUTO_CANCEL_DEADLINE",
	Canceled = "CANCELED",
	Closed = "CLOSED",
	CommentInOrder = "COMMENT_IN_ORDER",
	Confirm = "CONFIRM",
	CorporateOrderCreated = "CORPORATE_ORDER_CREATED",
	Created = "CREATED",
	ManualPaymentSuccess = "MANUAL_PAYMENT_SUCCESS",
	OnTheWay = "ON_THE_WAY",
	PaymentSuccess = "PAYMENT_SUCCESS",
	PtoApproved = "PTO_APPROVED",
	PtoRejected = "PTO_REJECTED",
	Rejected = "REJECTED",
	RequestToConfirm = "REQUEST_TO_CONFIRM",
	SendOrder = "SEND_ORDER",
	TableAdded = "TABLE_ADDED",
	TableRemoved = "TABLE_REMOVED",
	Updated = "UPDATED",
	UpdateDeliveryTime = "UPDATE_DELIVERY_TIME",
	UserAdded = "USER_ADDED",
	WaitingForCourier = "WAITING_FOR_COURIER",
	WaitingForManualPay = "WAITING_FOR_MANUAL_PAY",
	WaitingForPrepayment = "WAITING_FOR_PREPAYMENT"
}

export enum OrderStatusEnum {
	Approved = "APPROVED",
	Canceled = "CANCELED",
	Closed = "CLOSED",
	Cooking = "COOKING",
	Created = "CREATED",
	Draft = "DRAFT",
	OnTheWay = "ON_THE_WAY",
	Rejected = "REJECTED",
	RequestToConfirm = "REQUEST_TO_CONFIRM",
	WaitingForCourier = "WAITING_FOR_COURIER",
	WaitingForPrepayment = "WAITING_FOR_PREPAYMENT"
}

export enum OrderTypeEnum {
	Delivery = "DELIVERY",
	InPlace = "IN_PLACE",
	OutOfPlace = "OUT_OF_PLACE",
	Pickup = "PICKUP",
	Reserve = "RESERVE"
}

export interface PaginatedAccountingSystem {
	__typename?: "PaginatedAccountingSystem";
	data?: Maybe<AccountingSystemEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedActiveNotification {
	__typename?: "PaginatedActiveNotification";
	data?: Maybe<ActiveNotificationEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedActiveOrder {
	__typename?: "PaginatedActiveOrder";
	data?: Maybe<ActiveOrderEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedActiveShift {
	__typename?: "PaginatedActiveShift";
	data?: Maybe<ActiveShiftEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedAllergens {
	__typename?: "PaginatedAllergens";
	data?: Maybe<AllergenEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedArticles {
	__typename?: "PaginatedArticles";
	data?: Maybe<ArticleEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedAttributes {
	__typename?: "PaginatedAttributes";
	data?: Maybe<AttributeEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedAttributesGroups {
	__typename?: "PaginatedAttributesGroups";
	data?: Maybe<AttributesGroupEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCategory {
	__typename?: "PaginatedCategory";
	data?: Maybe<CategoryEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedChatbot {
	__typename?: "PaginatedChatbot";
	data?: Maybe<ChatbotEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCommand {
	__typename?: "PaginatedCommand";
	data?: Maybe<CommandEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCompany {
	__typename?: "PaginatedCompany";
	data?: Maybe<CompanyEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedContacts {
	__typename?: "PaginatedContacts";
	data?: Maybe<ContactEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCouponToUser {
	__typename?: "PaginatedCouponToUser";
	data?: Maybe<CouponToUserEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCoupons {
	__typename?: "PaginatedCoupons";
	data?: Maybe<CouponEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedHall {
	__typename?: "PaginatedHall";
	data?: Maybe<HallEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedHistoryOrder {
	__typename?: "PaginatedHistoryOrder";
	data?: Maybe<HistoryOrderEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedInfoBlocks {
	__typename?: "PaginatedInfoBlocks";
	data?: Maybe<InfoBlockEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedNews {
	__typename?: "PaginatedNews";
	data?: Maybe<NewsEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPartnership {
	__typename?: "PaginatedPartnership";
	data?: Maybe<PartnershipEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPaymentSystem {
	__typename?: "PaginatedPaymentSystem";
	data?: Maybe<PaymentSystemEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPaymentSystemToPlace {
	__typename?: "PaginatedPaymentSystemToPlace";
	data?: Maybe<PaymentSystemToPlaceEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPaymentType {
	__typename?: "PaginatedPaymentType";
	data?: Maybe<PaymentTypeEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPlace {
	__typename?: "PaginatedPlace";
	data?: Maybe<PlaceEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPlaceWithDistance {
	__typename?: "PaginatedPlaceWithDistance";
	data?: Maybe<PlaceWithDistance[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedProduct {
	__typename?: "PaginatedProduct";
	data?: Maybe<ProductEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedPromotion {
	__typename?: "PaginatedPromotion";
	data?: Maybe<PromotionEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedQrCode {
	__typename?: "PaginatedQrCode";
	data?: Maybe<QrCodeEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedReels {
	__typename?: "PaginatedReels";
	data?: Maybe<ReelEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedRequest {
	__typename?: "PaginatedRequest";
	data?: Maybe<RequestEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedReview {
	__typename?: "PaginatedReview";
	data?: Maybe<ReviewEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedSet {
	__typename?: "PaginatedSet";
	data?: Maybe<SetEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedSocialNetworks {
	__typename?: "PaginatedSocialNetworks";
	data?: Maybe<SocialNetworkEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedStopList {
	__typename?: "PaginatedStopList";
	data?: Maybe<StopListEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTable {
	__typename?: "PaginatedTable";
	data?: Maybe<TableEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTags {
	__typename?: "PaginatedTags";
	data?: Maybe<TagEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTagsToPlaces {
	__typename?: "PaginatedTagsToPlaces";
	data?: Maybe<TagToPlaceEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTransactionEntity {
	__typename?: "PaginatedTransactionEntity";
	data?: Maybe<TransactionEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedUser {
	__typename?: "PaginatedUser";
	data?: Maybe<UserEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedUserToPlace {
	__typename?: "PaginatedUserToPlace";
	data?: Maybe<UserToPlaceEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedUsersToProducts {
	__typename?: "PaginatedUsersToProducts";
	data?: Maybe<UserToProductEntity[]>;
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PartnershipEntity {
	__typename?: "PartnershipEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	office: PlaceEntity;
	restaurant: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface PartnershipInput {
	office: PlaceInput;
	restaurant: PlaceInput;
}

export interface PaymentSystemEntity {
	__typename?: "PaymentSystemEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: PaymentSystemEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export enum PaymentSystemEnum {
	Monobank = "MONOBANK"
}

export interface PaymentSystemInput {
	name: PaymentSystemEnum;
}

export interface PaymentSystemToPlaceEntity {
	__typename?: "PaymentSystemToPlaceEntity";
	categories?: Maybe<CategoryEntity[]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	isDefault: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	paymentSystem: PaymentSystemEntity;
	paymentSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface PaymentSystemToPlaceInput {
	categories?: InputMaybe<CategoryInput[]>;
	isDefault: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
	paymentSystem: PaymentSystemInput;
	paymentSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	place: PlaceInput;
}

export interface PaymentTypeEntity {
	__typename?: "PaymentTypeEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	type: PaymentTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export enum PaymentTypeEnum {
	Card = "CARD",
	Cash = "CASH",
	Terminal = "TERMINAL"
}

export interface PaymentTypeInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	place: PlaceInput;
	type: PaymentTypeEnum;
}

export enum PlaceA11yEnum {
	Delivery = "DELIVERY",
	InPlace = "IN_PLACE",
	Pickup = "PICKUP",
	Reserve = "RESERVE"
}

export enum PlaceDeliveryTypeEnum {
	NoVehicle = "NO_VEHICLE",
	Vehicle = "VEHICLE"
}

export interface PlaceEntity {
	__typename?: "PlaceEntity";
	a11y: Scalars["JSONObject"]["output"];
	accessCode: Scalars["Int"]["output"];
	accountingSystem?: Maybe<AccountingSystemToPlaceEntity>;
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	address: Scalars["String"]["output"];
	allergens: AllergenEntity[];
	attributesGroups: AttributesGroupEntity[];
	bonusPercent?: Maybe<Scalars["Float"]["output"]>;
	categories?: Maybe<CategoryEntity[]>;
	chatbot?: Maybe<ChatbotToPlaceEntity>;
	commands?: Maybe<CommandEntity[]>;
	company: CompanyEntity;
	contacts?: Maybe<ContactEntity[]>;
	coupons: CouponEntity[];
	createdAt: Scalars["DateTime"]["output"];
	customization?: Maybe<Scalars["JSONObject"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	discountPercent?: Maybe<Scalars["Float"]["output"]>;
	distance?: Maybe<Scalars["Float"]["output"]>;
	halls?: Maybe<HallEntity[]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	infoBlocks?: Maybe<InfoBlockEntity[]>;
	isHidden: Scalars["Boolean"]["output"];
	likesCount: Scalars["Int"]["output"];
	logo?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	news?: Maybe<NewsEntity[]>;
	officePartnerships: PartnershipEntity[];
	orders?: Maybe<ActiveOrderEntity[]>;
	paymentSystems?: Maybe<PaymentSystemToPlaceEntity[]>;
	point?: Maybe<PointType>;
	priority: Scalars["Int"]["output"];
	promotions?: Maybe<PromotionEntity[]>;
	reels?: Maybe<ReelEntity[]>;
	restaurantPartnerships: PartnershipEntity[];
	slug: Scalars["String"]["output"];
	socialNetworks?: Maybe<SocialNetworkEntity[]>;
	source: PlaceSourceEnum;
	status: PlaceStatusEnum;
	tagsToPlace?: Maybe<TagToPlaceEntity[]>;
	terminals: TerminalEntity[];
	translates?: Maybe<TranslatesEntity[]>;
	type: PlaceTypeEnum;
	typesToPlace?: Maybe<TypeToPlaceEntity[]>;
	updatedAt: Scalars["DateTime"]["output"];
	usersToPlace?: Maybe<UserToPlaceEntity[]>;
	verificationStatus: PlaceVerificationStatusEnum;
	weekdayEnd: Scalars["Time"]["output"];
	weekdayStart: Scalars["Time"]["output"];
}

export interface PlaceInput {
	a11y: Scalars["JSONObject"]["input"];
	accessCode: Scalars["Int"]["input"];
	accountingSystem?: InputMaybe<AccountingSystemToPlaceInput>;
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	address: Scalars["String"]["input"];
	allergens: AllergenInput[];
	attributesGroups: AttributesGroupInput[];
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	categories?: InputMaybe<CategoryInput[]>;
	chatbot?: InputMaybe<ChatbotToPlaceInput>;
	commands?: InputMaybe<CommandInput[]>;
	company: CompanyInput;
	contacts: ContactsInput[];
	coupons: CouponInput[];
	customization?: InputMaybe<Scalars["JSONObject"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	distance?: InputMaybe<Scalars["Float"]["input"]>;
	halls: HallInput[];
	image?: InputMaybe<FileInput>;
	infoBlocks: InfoBlocksInput[];
	isHidden: Scalars["Boolean"]["input"];
	likesCount: Scalars["Int"]["input"];
	logo?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	news: NewsInput[];
	officePartnerships: PartnershipInput[];
	orders?: InputMaybe<ActiveOrderInput[]>;
	paymentSystems?: InputMaybe<PaymentSystemToPlaceInput[]>;
	point?: InputMaybe<PointInputType>;
	priority: Scalars["Int"]["input"];
	promotions: PromotionInput[];
	reels: ReelInput[];
	restaurantPartnerships: PartnershipInput[];
	slug: Scalars["String"]["input"];
	socialNetworks: SocialNetworkInput[];
	source: PlaceSourceEnum;
	status: PlaceStatusEnum;
	tagsToPlace?: InputMaybe<TagToPlaceInput[]>;
	terminals: TerminalInput[];
	translates?: InputMaybe<TranslatesInput[]>;
	type: PlaceTypeEnum;
	typesToPlace?: InputMaybe<TypeToPlaceInput[]>;
	usersToPlace?: InputMaybe<UserToPlaceInput[]>;
	verificationStatus: PlaceVerificationStatusEnum;
	weekdayEnd: Scalars["Time"]["input"];
	weekdayStart: Scalars["Time"]["input"];
}

export enum PlaceSourceEnum {
	Bond = "BOND",
	Choiceqr = "CHOICEQR",
	Glovo = "GLOVO",
	Monobank = "MONOBANK",
	Oddmenu = "ODDMENU",
	Poster = "POSTER",
	Resty = "RESTY",
	Tripadvisor = "TRIPADVISOR"
}

export enum PlaceStatusEnum {
	Closed = "CLOSED",
	Opened = "OPENED"
}

export enum PlaceTypeEnum {
	Office = "OFFICE",
	Restaurant = "RESTAURANT"
}

export enum PlaceVerificationStatusEnum {
	NotVerified = "NOT_VERIFIED",
	Verified = "VERIFIED",
	WaitingForApprove = "WAITING_FOR_APPROVE"
}

export interface PlaceWithDistance {
	__typename?: "PlaceWithDistance";
	a11y: Scalars["JSONObject"]["output"];
	accessCode: Scalars["Int"]["output"];
	accountingSystem?: Maybe<AccountingSystemToPlaceEntity>;
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	address: Scalars["String"]["output"];
	allergens: AllergenEntity[];
	attributesGroups: AttributesGroupEntity[];
	bonusPercent?: Maybe<Scalars["Float"]["output"]>;
	categories?: Maybe<CategoryEntity[]>;
	chatbot?: Maybe<ChatbotToPlaceEntity>;
	commands?: Maybe<CommandEntity[]>;
	company: CompanyEntity;
	contacts?: Maybe<ContactEntity[]>;
	coupons: CouponEntity[];
	createdAt: Scalars["DateTime"]["output"];
	customization?: Maybe<Scalars["JSONObject"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	discountPercent?: Maybe<Scalars["Float"]["output"]>;
	distance?: Maybe<Scalars["Float"]["output"]>;
	halls?: Maybe<HallEntity[]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	infoBlocks?: Maybe<InfoBlockEntity[]>;
	isHidden: Scalars["Boolean"]["output"];
	likesCount: Scalars["Int"]["output"];
	logo?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	news?: Maybe<NewsEntity[]>;
	officePartnerships: PartnershipEntity[];
	orders?: Maybe<ActiveOrderEntity[]>;
	paymentSystems?: Maybe<PaymentSystemToPlaceEntity[]>;
	point?: Maybe<PointType>;
	priority: Scalars["Int"]["output"];
	promotions?: Maybe<PromotionEntity[]>;
	reels?: Maybe<ReelEntity[]>;
	restaurantPartnerships: PartnershipEntity[];
	slug: Scalars["String"]["output"];
	socialNetworks?: Maybe<SocialNetworkEntity[]>;
	source: PlaceSourceEnum;
	status: PlaceStatusEnum;
	tagsToPlace?: Maybe<TagToPlaceEntity[]>;
	terminals: TerminalEntity[];
	translates?: Maybe<TranslatesEntity[]>;
	type: PlaceTypeEnum;
	typesToPlace?: Maybe<TypeToPlaceEntity[]>;
	updatedAt: Scalars["DateTime"]["output"];
	usersToPlace?: Maybe<UserToPlaceEntity[]>;
	verificationStatus: PlaceVerificationStatusEnum;
	weekdayEnd: Scalars["Time"]["output"];
	weekdayStart: Scalars["Time"]["output"];
}

export interface PointInputType {
	coordinates: Scalars["Float"]["input"][];
	type: Scalars["String"]["input"];
}

export interface PointType {
	__typename?: "PointType";
	coordinates: Scalars["Float"]["output"][];
	type: Scalars["String"]["output"];
}

export interface ProductEntity {
	__typename?: "ProductEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	allergensToProduct: AllergenToProductEntity[];
	attributesGroupsToProduct: AttributesGroupToProductEntity[];
	bonusPercent?: Maybe<Scalars["Float"]["output"]>;
	category: CategoryEntity;
	childPairings?: Maybe<ProductPairingEntity[]>;
	cookingTime?: Maybe<Scalars["Float"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	discountPercent?: Maybe<Scalars["Float"]["output"]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	isHidden: Scalars["Boolean"]["output"];
	likesCount: Scalars["Int"]["output"];
	name: Scalars["String"]["output"];
	parentPairings?: Maybe<ProductPairingEntity[]>;
	position: Scalars["Int"]["output"];
	price: Scalars["Float"]["output"];
	slug: Scalars["String"]["output"];
	stopList?: Maybe<StopListEntity>;
	tagsToProduct: TagToProductEntity[];
	updatedAt: Scalars["DateTime"]["output"];
	usersToProduct: UserToProductEntity[];
}

export interface ProductInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	allergensToProduct?: InputMaybe<AllergenToProductInput[]>;
	attributesGroupsToProduct?: InputMaybe<AttributesGroupToProductInput[]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	category: CategoryInput;
	childPairings?: InputMaybe<ProductPairingInput[]>;
	cookingTime?: InputMaybe<Scalars["Float"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	image?: InputMaybe<FileInput>;
	isHidden: Scalars["Boolean"]["input"];
	likesCount: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	parentPairings?: InputMaybe<ProductPairingInput[]>;
	position: Scalars["Int"]["input"];
	price: Scalars["Float"]["input"];
	slug: Scalars["String"]["input"];
	stopList: StopListInput;
	tagsToProduct?: InputMaybe<TagToProductInput[]>;
	usersToProduct?: InputMaybe<UserToProductInput[]>;
}

export interface ProductPairingEntity {
	__typename?: "ProductPairingEntity";
	childProduct?: Maybe<ProductEntity>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	parentProduct?: Maybe<ProductEntity>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ProductPairingInput {
	childProduct?: InputMaybe<ProductInput>;
	parentProduct?: InputMaybe<ProductInput>;
}

export interface ProductToOrderEntity {
	__typename?: "ProductToOrderEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	attributesToProductToOrder?: Maybe<AttributeToProductToOrderEntity[]>;
	bonusApplied?: Maybe<Scalars["Float"]["output"]>;
	comment?: Maybe<Scalars["String"]["output"]>;
	count: Scalars["Int"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	order: ActiveOrderEntity;
	paidStatus: ProductToOrderPaidStatusEnum;
	paymentType?: Maybe<PaymentTypeEntity>;
	product: ProductEntity;
	status: ProductToOrderStatusEnum;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
	userForPay?: Maybe<UserEntity>;
}

export interface ProductToOrderInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	attributesToProductToOrder?: InputMaybe<AttributeToProductToOrderInput[]>;
	bonusApplied?: InputMaybe<Scalars["Float"]["input"]>;
	comment?: InputMaybe<Scalars["String"]["input"]>;
	count: Scalars["Int"]["input"];
	order: ActiveOrderInput;
	paidStatus: ProductToOrderPaidStatusEnum;
	paymentType?: InputMaybe<PaymentTypeInput>;
	product: ProductInput;
	status: ProductToOrderStatusEnum;
	user: UserInput;
	userForPay?: InputMaybe<UserInput>;
}

export enum ProductToOrderPaidStatusEnum {
	NotPaid = "NOT_PAID",
	Paid = "PAID",
	Waiting = "WAITING"
}

export enum ProductToOrderStatusEnum {
	Approved = "APPROVED",
	Rejected = "REJECTED",
	WaitingForApprove = "WAITING_FOR_APPROVE"
}

export interface ProductToSetEntity {
	__typename?: "ProductToSetEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	product: ProductEntity;
	set: SetEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ProductToSetInput {
	product: ProductInput;
	set: SetInput;
}

export interface PromotionEntity {
	__typename?: "PromotionEntity";
	createdAt: Scalars["DateTime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface PromotionInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<FileInput>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	slug: Scalars["String"]["input"];
}

export interface QrCodeEntity {
	__typename?: "QrCodeEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	qrlyCode: Scalars["Float"]["output"];
	qrlyId: Scalars["String"]["output"];
	table?: Maybe<TableEntity>;
	updatedAt: Scalars["DateTime"]["output"];
	url: Scalars["String"]["output"];
}

export interface QrCodeInput {
	name: Scalars["String"]["input"];
	place: PlaceInput;
	qrlyCode: Scalars["Float"]["input"];
	qrlyId: Scalars["String"]["input"];
	table?: InputMaybe<TableInput>;
	url: Scalars["String"]["input"];
}

export interface Query {
	__typename?: "Query";
	accountingSystem: AccountingSystemEntity;
	accountingSystemToPlace?: Maybe<AccountingSystemToPlaceEntity>;
	accountingSystems: PaginatedAccountingSystem;
	activeOrder?: Maybe<ActiveOrderEntity>;
	activeShift?: Maybe<ActiveShiftEntity>;
	allergen: AllergenEntity;
	allergens: PaginatedAllergens;
	article?: Maybe<ArticleEntity>;
	articles: PaginatedArticles;
	attribute: AttributeEntity;
	attributes: PaginatedAttributes;
	attributesGroup: AttributesGroupEntity;
	attributesGroups: PaginatedAttributesGroups;
	categories: PaginatedCategory;
	category: CategoryEntity;
	chatbot: ChatbotEntity;
	chatbotToPlace?: Maybe<ChatbotToPlaceEntity>;
	chatbots: PaginatedChatbot;
	command: CommandEntity;
	commands: PaginatedCommand;
	companies: PaginatedCompany;
	company: CompanyEntity;
	contact: ContactEntity;
	contacts: PaginatedContacts;
	coupon: CouponEntity;
	couponToUser: CouponToUserEntity;
	coupons: PaginatedCoupons;
	couponsToUsers: PaginatedCouponToUser;
	customerHistoryOrder: HistoryOrderEntity;
	customerHistoryOrders: PaginatedHistoryOrder;
	exportDataToTelegram: Scalars["String"]["output"];
	findCouponToUser?: Maybe<CouponToUserEntity>;
	generateBills: Scalars["String"]["output"];
	getMe: AccessToken;
	getNearby: PaginatedPlaceWithDistance;
	getOffice?: Maybe<PlaceEntity>;
	getOneNews?: Maybe<NewsEntity>;
	getOrderByTable?: Maybe<ActiveOrderEntity>;
	getPlaceStatistic: GetPlaceStatisticType;
	getPlaceStatistic2: GetPlaceStatistic2Type;
	getPlaceStatistic2ByRange: Scalars["JSONObject"]["output"];
	getPlaceStatisticByRange: Scalars["JSONObject"]["output"];
	getPlaceToType: TypeToPlaceEntity;
	getReelsNearby: PaginatedReels;
	getSession?: Maybe<Scalars["String"]["output"]>;
	getTransactionsByOrder: PaginatedTransactionEntity;
	getUserReviews: PaginatedReview;
	hall: HallEntity;
	halls: PaginatedHall;
	historyNotification?: Maybe<ActiveNotificationEntity>;
	historyNotifications: PaginatedActiveNotification;
	historyOrder: HistoryOrderEntity;
	historyOrders: PaginatedHistoryOrder;
	infoBlock: InfoBlockEntity;
	infoBlocks: PaginatedInfoBlocks;
	isDeliveryDistanceAvailable: Scalars["Boolean"]["output"];
	isTableAvailableForReserve: TableEntity;
	isTimeAvailable: Scalars["Boolean"]["output"];
	language: LanguageEntity;
	languages: LanguageEntity;
	news: PaginatedNews;
	notification?: Maybe<ActiveNotificationEntity>;
	notifications: PaginatedActiveNotification;
	order?: Maybe<ActiveOrderEntity>;
	orders: PaginatedActiveOrder;
	ordersEvents: OrderEventEnum;
	partnershipPlaces: PaginatedPlace;
	partnerships: PaginatedPartnership;
	paymentSystem: PaymentSystemEntity;
	paymentSystems: PaginatedPaymentSystem;
	paymentSystemsToPlace: PaginatedPaymentSystemToPlace;
	paymentType: PaymentTypeEntity;
	paymentTypes: PaginatedPaymentType;
	place: PlaceEntity;
	placeA11yEnum: PlaceA11yEnum;
	places: PaginatedPlace;
	product: ProductEntity;
	products: PaginatedProduct;
	promotion?: Maybe<PromotionEntity>;
	promotions: PaginatedPromotion;
	qrCode: QrCodeEntity;
	qrCodes: PaginatedQrCode;
	reel: ReelEntity;
	reels: PaginatedReels;
	request?: Maybe<RequestEntity>;
	requests: PaginatedRequest;
	review?: Maybe<ReviewEntity>;
	reviews: PaginatedReview;
	set?: Maybe<SetEntity>;
	sets: PaginatedSet;
	shift?: Maybe<ActiveShiftEntity>;
	shifts: PaginatedActiveShift;
	socialNetwork: SocialNetworkEntity;
	socialNetworks: PaginatedSocialNetworks;
	stopList?: Maybe<StopListEntity>;
	stopLists: PaginatedStopList;
	table: TableEntity;
	tables: PaginatedTable;
	tag: TagEntity;
	tagToPlace: TagToPlaceEntity;
	tags: PaginatedTags;
	tagsToPlaces: PaginatedTagsToPlaces;
	translatesByPlaceId?: Maybe<TranslateByPlaceIdObject[]>;
	user?: Maybe<UserEntity>;
	userToPlace?: Maybe<UserToPlaceEntity>;
	users: PaginatedUser;
	usersToPlace: PaginatedUserToPlace;
	usersToProducts: PaginatedUsersToProducts;
}

export interface QueryAccountingSystemArgs {
	id: Scalars["String"]["input"];
}

export interface QueryAccountingSystemToPlaceArgs {
	placeId: Scalars["String"]["input"];
}

export interface QueryAccountingSystemsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryActiveOrderArgs {
	officeId?: InputMaybe<Scalars["String"]["input"]>;
	orderId?: InputMaybe<Scalars["String"]["input"]>;
	placeId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryAllergenArgs {
	id: Scalars["String"]["input"];
}

export interface QueryAllergensArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryArticleArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryArticlesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryAttributeArgs {
	id: Scalars["String"]["input"];
}

export interface QueryAttributesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryAttributesGroupArgs {
	id: Scalars["String"]["input"];
}

export interface QueryAttributesGroupsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCategoriesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCategoryArgs {
	id: Scalars["String"]["input"];
}

export interface QueryChatbotArgs {
	id: Scalars["String"]["input"];
}

export interface QueryChatbotToPlaceArgs {
	placeId: Scalars["String"]["input"];
}

export interface QueryChatbotsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCommandArgs {
	id: Scalars["String"]["input"];
}

export interface QueryCommandsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCompaniesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCompanyArgs {
	id: Scalars["String"]["input"];
}

export interface QueryContactArgs {
	id: Scalars["String"]["input"];
}

export interface QueryContactsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCouponArgs {
	id: Scalars["String"]["input"];
}

export interface QueryCouponToUserArgs {
	id: Scalars["String"]["input"];
}

export interface QueryCouponsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCouponsToUsersArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCustomerHistoryOrderArgs {
	orderId: Scalars["String"]["input"];
}

export interface QueryCustomerHistoryOrdersArgs {
	customerId?: InputMaybe<Scalars["String"]["input"]>;
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryExportDataToTelegramArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	placeId: Scalars["String"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryFindCouponToUserArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryGenerateBillsArgs {
	from: Scalars["DateTime"]["input"];
	placeId: Scalars["String"]["input"];
	to: Scalars["DateTime"]["input"];
}

export interface QueryGetNearbyArgs {
	address?: InputMaybe<Scalars["String"]["input"]>;
	distance?: InputMaybe<Scalars["Float"]["input"]>;
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	lat?: InputMaybe<Scalars["Float"]["input"]>;
	lng?: InputMaybe<Scalars["Float"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryGetOfficeArgs {
	officeId: Scalars["String"]["input"];
}

export interface QueryGetOneNewsArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryGetOrderByTableArgs {
	code?: InputMaybe<Scalars["Float"]["input"]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryGetPlaceStatisticArgs {
	placeId: Scalars["String"]["input"];
}

export interface QueryGetPlaceStatistic2Args {
	placeId: Scalars["String"]["input"];
}

export interface QueryGetPlaceStatistic2ByRangeArgs {
	endDate: Scalars["String"]["input"];
	placeId: Scalars["String"]["input"];
	startDate: Scalars["String"]["input"];
	userId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryGetPlaceStatisticByRangeArgs {
	endDate: Scalars["String"]["input"];
	placeId: Scalars["String"]["input"];
	startDate: Scalars["String"]["input"];
	userId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryGetPlaceToTypeArgs {
	placeId: Scalars["String"]["input"];
}

export interface QueryGetReelsNearbyArgs {
	address?: InputMaybe<Scalars["String"]["input"]>;
	distance?: InputMaybe<Scalars["Float"]["input"]>;
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	lat?: InputMaybe<Scalars["Float"]["input"]>;
	lng?: InputMaybe<Scalars["Float"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryGetSessionArgs {
	sessionId: Scalars["String"]["input"];
}

export interface QueryGetTransactionsByOrderArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	orderId: Scalars["String"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryGetUserReviewsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	placeId: Scalars["String"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
	userId: Scalars["String"]["input"];
}

export interface QueryHallArgs {
	id: Scalars["String"]["input"];
}

export interface QueryHallsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryHistoryNotificationArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryHistoryNotificationsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryHistoryOrderArgs {
	id: Scalars["String"]["input"];
}

export interface QueryHistoryOrdersArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	placeId: Scalars["String"]["input"];
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryInfoBlockArgs {
	id: Scalars["String"]["input"];
}

export interface QueryInfoBlocksArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryIsDeliveryDistanceAvailableArgs {
	address: Scalars["String"]["input"];
	placeId: Scalars["String"]["input"];
}

export interface QueryIsTableAvailableForReserveArgs {
	date: Scalars["DateTime"]["input"];
	tableId: Scalars["String"]["input"];
}

export interface QueryIsTimeAvailableArgs {
	date: Scalars["DateTime"]["input"];
	placeId: Scalars["String"]["input"];
	type: OrderTypeEnum;
}

export interface QueryLanguageArgs {
	id: Scalars["String"]["input"];
}

export interface QueryLanguagesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryNewsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryNotificationArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryNotificationsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryOrderArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryOrdersArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPartnershipPlacesArgs {
	officeId: Scalars["String"]["input"];
}

export interface QueryPartnershipsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPaymentSystemArgs {
	id: Scalars["String"]["input"];
}

export interface QueryPaymentSystemsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPaymentSystemsToPlaceArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPaymentTypeArgs {
	id: Scalars["String"]["input"];
}

export interface QueryPaymentTypesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPlaceArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	id: Scalars["String"]["input"];
}

export interface QueryPlacesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryProductArgs {
	id: Scalars["String"]["input"];
}

export interface QueryProductsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryPromotionArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryPromotionsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryQrCodeArgs {
	id: Scalars["String"]["input"];
}

export interface QueryQrCodesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryReelArgs {
	id: Scalars["String"]["input"];
}

export interface QueryReelsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryRequestArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryRequestsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryReviewArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryReviewsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QuerySetArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QuerySetsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryShiftArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryShiftsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QuerySocialNetworkArgs {
	id: Scalars["String"]["input"];
}

export interface QuerySocialNetworksArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryStopListArgs {
	filtersArgs: FiltersArgsDto[];
}

export interface QueryStopListsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryTableArgs {
	id: Scalars["String"]["input"];
}

export interface QueryTablesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryTagArgs {
	id: Scalars["String"]["input"];
}

export interface QueryTagToPlaceArgs {
	id: Scalars["String"]["input"];
}

export interface QueryTagsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryTagsToPlacesArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryTranslatesByPlaceIdArgs {
	placeId: Scalars["String"]["input"];
}

export interface QueryUserArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryUserToPlaceArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface QueryUsersArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUsersToPlaceArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUsersToProductsArgs {
	filtersArgs?: InputMaybe<FiltersArgsDto[]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sortBy?: InputMaybe<Scalars["String"]["input"]>;
	sortType?: InputMaybe<SortTypeEnum>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ReelEntity {
	__typename?: "ReelEntity";
	createdAt: Scalars["DateTime"]["output"];
	icon?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	link?: Maybe<Scalars["String"]["output"]>;
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	position: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	usersToReel?: Maybe<UserToReelEntity[]>;
	views: Scalars["Int"]["output"];
}

export interface ReelInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<FileInput>;
	link?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	position: Scalars["Int"]["input"];
	usersToReel?: InputMaybe<UserToReelInput[]>;
	views: Scalars["Int"]["input"];
}

export interface RequestEntity {
	__typename?: "RequestEntity";
	createdAt: Scalars["DateTime"]["output"];
	from: PlaceEntity;
	id: Scalars["String"]["output"];
	status: RequestStatusEnum;
	to: PlaceEntity;
	type: RequestTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface RequestInput {
	from: PlaceInput;
	status: RequestStatusEnum;
	to: PlaceInput;
	type: RequestTypeEnum;
}

export enum RequestStatusEnum {
	Accepted = "ACCEPTED",
	Declined = "DECLINED",
	Waiting = "WAITING"
}

export enum RequestTypeEnum {
	Partnership = "PARTNERSHIP"
}

export interface ResetPasswordInput {
	password: Scalars["String"]["input"];
}

export interface ReviewEntity {
	__typename?: "ReviewEntity";
	comment?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	historyOrder?: Maybe<HistoryOrderEntity>;
	id: Scalars["String"]["output"];
	order?: Maybe<ActiveOrderEntity>;
	place?: Maybe<PlaceEntity>;
	rating?: Maybe<Scalars["Int"]["output"]>;
	updatedAt: Scalars["DateTime"]["output"];
	user?: Maybe<UserEntity>;
}

export interface ReviewInput {
	comment?: InputMaybe<Scalars["String"]["input"]>;
	historyOrder?: InputMaybe<HistoryOrderInput>;
	order?: InputMaybe<ActiveOrderInput>;
	place?: InputMaybe<PlaceInput>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	user?: InputMaybe<UserInput>;
}

export interface SetEntity {
	__typename?: "SetEntity";
	autoGenerate: Scalars["Boolean"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	productsToSet?: Maybe<ProductToSetEntity[]>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface SetInput {
	autoGenerate: Scalars["Boolean"]["input"];
	description: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	place: PlaceInput;
	productsToSet?: InputMaybe<ProductToSetInput[]>;
	slug: Scalars["String"]["input"];
}

export interface SignInInput {
	email?: InputMaybe<Scalars["String"]["input"]>;
	password: Scalars["String"]["input"];
	phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface SignUpInput {
	email?: InputMaybe<Scalars["String"]["input"]>;
	password: Scalars["String"]["input"];
	phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface SocialNetworkEntity {
	__typename?: "SocialNetworkEntity";
	createdAt: Scalars["DateTime"]["output"];
	icon?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
	url: Scalars["String"]["output"];
}

export interface SocialNetworkInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	place: PlaceInput;
	url: Scalars["String"]["input"];
}

export enum SortTypeEnum {
	Asc = "ASC",
	Desc = "DESC"
}

export interface StopListEntity {
	__typename?: "StopListEntity";
	count: Scalars["Float"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	product?: Maybe<ProductEntity>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface StopListInput {
	count: Scalars["Float"]["input"];
	product?: InputMaybe<ProductInput>;
}

export interface TableEntity {
	__typename?: "TableEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	code: Scalars["Int"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	hall: HallEntity;
	id: Scalars["String"]["output"];
	image?: Maybe<FileEntity>;
	isHidden: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	orders?: Maybe<ActiveOrderEntity[]>;
	position: Scalars["Int"]["output"];
	qrCode?: Maybe<QrCodeEntity>;
	shiftsToTable?: Maybe<TableToShiftEntity[]>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TableInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	code: Scalars["Int"]["input"];
	hall: HallInput;
	image?: InputMaybe<FileInput>;
	isHidden: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
	orders?: InputMaybe<ActiveOrderInput[]>;
	position: Scalars["Int"]["input"];
	qrCode?: InputMaybe<QrCodeInput>;
	shiftsToTable?: InputMaybe<TableToShiftInput[]>;
	slug: Scalars["String"]["input"];
}

export interface TableToShiftEntity {
	__typename?: "TableToShiftEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	shift: ActiveShiftEntity;
	table: TableEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TableToShiftInput {
	shift: ActiveShiftInput;
	table: TableInput;
}

export interface TagEntity {
	__typename?: "TagEntity";
	createdAt: Scalars["DateTime"]["output"];
	icon?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	isHidden: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	placesToTag?: Maybe<TagToPlaceEntity[]>;
	position: Scalars["Int"]["output"];
	productsToTag?: Maybe<TagToProductEntity[]>;
	type: TagTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TagInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	isHidden: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
	placesToTag?: InputMaybe<TagToPlaceInput[]>;
	position: Scalars["Int"]["input"];
	productsToTag?: InputMaybe<TagToProductInput[]>;
	type: TagTypeEnum;
}

export interface TagToPlaceEntity {
	__typename?: "TagToPlaceEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	tag: TagEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TagToPlaceInput {
	place: PlaceInput;
	tag: TagInput;
}

export interface TagToProductEntity {
	__typename?: "TagToProductEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	product: ProductEntity;
	tag: TagEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TagToProductInput {
	product: ProductInput;
	tag: TagInput;
}

export enum TagTypeEnum {
	Place = "PLACE",
	Product = "PRODUCT"
}

export interface TelegramUserInput {
	added_to_attachment_menu?: InputMaybe<Scalars["Boolean"]["input"]>;
	first_name: Scalars["String"]["input"];
	is_bot?: InputMaybe<Scalars["Boolean"]["input"]>;
	is_premium?: InputMaybe<Scalars["Boolean"]["input"]>;
	language_code?: InputMaybe<Scalars["String"]["input"]>;
	last_name?: InputMaybe<Scalars["String"]["input"]>;
	phone: Scalars["String"]["input"];
	sessionId?: InputMaybe<Scalars["String"]["input"]>;
	telegramId: Scalars["String"]["input"];
	username?: InputMaybe<Scalars["String"]["input"]>;
}

export interface TerminalEntity {
	__typename?: "TerminalEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	halls: HallEntity[];
	id: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	place: PlaceEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TerminalInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	halls: HallInput[];
	name: Scalars["String"]["input"];
	place: PlaceInput;
}

export interface TransactionEntity {
	__typename?: "TransactionEntity";
	createdAt: Scalars["DateTime"]["output"];
	data: Scalars["JSONObject"]["output"];
	id: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TransactionInput {
	createdAt: Scalars["DateTime"]["input"];
	data: Scalars["JSONObject"]["input"];
}

export interface TranslateByPlaceIdInput {
	en?: InputMaybe<Scalars["String"]["input"]>;
	key: Scalars["String"]["input"];
	origin?: InputMaybe<Scalars["String"]["input"]>;
	ru?: InputMaybe<Scalars["String"]["input"]>;
	type?: InputMaybe<Scalars["String"]["input"]>;
	uk?: InputMaybe<Scalars["String"]["input"]>;
}

export interface TranslateByPlaceIdObject {
	__typename?: "TranslateByPlaceIdObject";
	en?: Maybe<Scalars["String"]["output"]>;
	key: Scalars["String"]["output"];
	origin?: Maybe<Scalars["String"]["output"]>;
	ru?: Maybe<Scalars["String"]["output"]>;
	type?: Maybe<Scalars["String"]["output"]>;
	uk?: Maybe<Scalars["String"]["output"]>;
}

export interface TranslatesEntity {
	__typename?: "TranslatesEntity";
	createdAt: Scalars["DateTime"]["output"];
	en: FileEntity;
	id: Scalars["String"]["output"];
	original: FileEntity;
	place: PlaceEntity;
	ru: FileEntity;
	uk: FileEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TranslatesInput {
	en: FileInput;
	original: FileInput;
	place: PlaceInput;
	ru: FileInput;
	uk: FileInput;
}

export interface TypeToPlaceEntity {
	__typename?: "TypeToPlaceEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	bonusPercent?: Maybe<Scalars["Float"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	deliveryMaxDistance?: Maybe<Scalars["Float"]["output"]>;
	deliveryType?: Maybe<PlaceDeliveryTypeEnum>;
	discountPercent?: Maybe<Scalars["Float"]["output"]>;
	endAvailableTime: Scalars["Int"]["output"];
	id: Scalars["String"]["output"];
	place: PlaceEntity;
	prePayment?: Maybe<Scalars["Boolean"]["output"]>;
	startAvailableTime: Scalars["Int"]["output"];
	type: OrderTypeEnum;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TypeToPlaceInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	deliveryMaxDistance?: InputMaybe<Scalars["Float"]["input"]>;
	deliveryType?: InputMaybe<PlaceDeliveryTypeEnum>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime: Scalars["Int"]["input"];
	place: PlaceInput;
	prePayment?: InputMaybe<Scalars["Boolean"]["input"]>;
	startAvailableTime: Scalars["Int"]["input"];
	type: OrderTypeEnum;
}

export interface UpdateAccountingSystemInput {
	id: Scalars["String"]["input"];
}

export interface UpdateAccountingSystemToPlaceInput {
	id: Scalars["String"]["input"];
	syncOrders: Scalars["Boolean"]["input"];
}

export interface UpdateAddressInput {
	address?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	specificDetails?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateAllergenInput {
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
}

export interface UpdateArticleInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	template?: InputMaybe<Scalars["JSON"]["input"]>;
}

export interface UpdateAttributeInput {
	attributesGroup?: InputMaybe<Scalars["String"]["input"][]>;
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	price?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface UpdateAttributesGroupInput {
	attributes?: InputMaybe<Scalars["String"]["input"][]>;
	id: Scalars["String"]["input"];
	isUniq?: InputMaybe<Scalars["Boolean"]["input"]>;
	maxItemsForPick?: InputMaybe<Scalars["Int"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	type?: InputMaybe<AttributesGroupTypeEnum>;
}

export interface UpdateCategoryInput {
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	childCategories?: InputMaybe<Scalars["String"]["input"][]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	parentCategories?: InputMaybe<Scalars["String"]["input"][]>;
	paymentSystem?: InputMaybe<Scalars["String"]["input"]>;
	position?: InputMaybe<Scalars["Int"]["input"]>;
	startAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface UpdateChatbotInput {
	id: Scalars["String"]["input"];
}

export interface UpdateChatbotToPlaceInput {
	chatbotFields: Scalars["JSONObject"]["input"];
	id: Scalars["String"]["input"];
}

export interface UpdateCommandInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	place?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateCommentToOrderInput {
	comment: Scalars["String"]["input"];
	commentToOrderId: Scalars["String"]["input"];
}

export interface UpdateCompanyInput {
	employees?: InputMaybe<Scalars["String"]["input"][]>;
	id: Scalars["String"]["input"];
	logo?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateContactInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	value: Scalars["String"]["input"];
}

export interface UpdateCouponInput {
	expiresAt: Scalars["DateTime"]["input"];
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface UpdateHallInput {
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface UpdateInfoBlockInput {
	description: Scalars["String"]["input"];
	icon?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
}

export interface UpdateMeInput {
	email?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<UserToPlaceRoleEnum>;
}

export interface UpdateNewsInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateNotificationInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	emitDate?: InputMaybe<Scalars["DateTime"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateOrderInput {
	asapProcessTime?: InputMaybe<Scalars["Boolean"]["input"]>;
	cookingTime?: InputMaybe<Scalars["String"]["input"]>;
	deliveryAddress?: InputMaybe<Scalars["String"]["input"]>;
	deliveryTime?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	startDate?: InputMaybe<Scalars["String"]["input"]>;
	table?: InputMaybe<Scalars["String"]["input"]>;
	type?: InputMaybe<OrderTypeEnum>;
}

export interface UpdatePaymentSystemInput {
	id: Scalars["String"]["input"];
}

export interface UpdatePaymentSystemToPlaceInput {
	categories?: InputMaybe<Scalars["String"]["input"][]>;
	id: Scalars["String"]["input"];
	isDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	paymentSystem: Scalars["String"]["input"];
	paymentSystemFields: Scalars["JSONObject"]["input"];
}

export interface UpdatePermissionsDto {
	deviceId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdatePlaceInput {
	a11y?: InputMaybe<Scalars["JSONObject"]["input"]>;
	address?: InputMaybe<Scalars["String"]["input"]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	customization?: InputMaybe<Scalars["JSONObject"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
	logo?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	weekdayEnd?: InputMaybe<Scalars["String"]["input"]>;
	weekdayStart?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdatePlaceToTypeInput {
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	deliveryMaxDistance?: InputMaybe<Scalars["Int"]["input"]>;
	deliveryType?: InputMaybe<PlaceDeliveryTypeEnum>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	endAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
	id: Scalars["String"]["input"];
	prePayment?: InputMaybe<Scalars["Boolean"]["input"]>;
	startAvailableTime?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface UpdateProductInput {
	allergens?: InputMaybe<Scalars["String"]["input"][]>;
	attributesGroups?: InputMaybe<Scalars["String"]["input"][]>;
	bonusPercent?: InputMaybe<Scalars["Float"]["input"]>;
	category?: InputMaybe<Scalars["String"]["input"]>;
	childPairings?: InputMaybe<Scalars["String"]["input"][]>;
	cookingTime?: InputMaybe<Scalars["Int"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	discountPercent?: InputMaybe<Scalars["Float"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	parentPairings?: InputMaybe<Scalars["String"]["input"][]>;
	position?: InputMaybe<Scalars["Int"]["input"]>;
	price?: InputMaybe<Scalars["Float"]["input"]>;
	tags?: InputMaybe<Scalars["String"]["input"][]>;
}

export interface UpdatePromotionInput {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateQrCodeInput {
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	place: Scalars["String"]["input"];
	table?: InputMaybe<Scalars["String"]["input"]>;
	url: Scalars["String"]["input"];
}

export interface UpdateReelInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	link?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface UpdateRequestInput {
	id: Scalars["String"]["input"];
	status: RequestStatusEnum;
}

export interface UpdateSetInput {
	autoGenerate?: Scalars["Boolean"]["input"];
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	productsToSet?: InputMaybe<CreateProductToSetInput[]>;
}

export interface UpdateShiftInput {
	id: Scalars["String"]["input"];
	tables?: InputMaybe<Scalars["String"]["input"][]>;
}

export interface UpdateSocialNetworkInput {
	icon?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	url: Scalars["String"]["input"];
}

export interface UpdateStopListInput {
	count: Scalars["Float"]["input"];
	id: Scalars["String"]["input"];
	product: Scalars["String"]["input"];
}

export interface UpdateTableInput {
	code?: InputMaybe<Scalars["Int"]["input"]>;
	id: Scalars["String"]["input"];
	image?: InputMaybe<Scalars["String"]["input"]>;
	isHidden?: InputMaybe<Scalars["Boolean"]["input"]>;
	name: Scalars["String"]["input"];
}

export interface UpdateTagInput {
	id: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
}

export interface UpdateTagToPlaceInput {
	id: Scalars["String"]["input"];
	tag: Scalars["String"]["input"];
}

export interface UpdateUserInput {
	address?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
	telegramId?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateUserToPlaceInput {
	id: Scalars["String"]["input"];
	role: UserToPlaceRoleEnum;
}

export interface UserEntity {
	__typename?: "UserEntity";
	address?: Maybe<AddressToUserEntity>;
	createdAt: Scalars["DateTime"]["output"];
	deviceId?: Maybe<Scalars["String"]["output"]>;
	email?: Maybe<Scalars["String"]["output"]>;
	googleId?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["String"]["output"];
	name?: Maybe<Scalars["String"]["output"]>;
	ordersToUser?: Maybe<UserToOrderEntity[]>;
	password?: Maybe<Scalars["String"]["output"]>;
	phone?: Maybe<Scalars["String"]["output"]>;
	sessionId?: Maybe<Scalars["String"]["output"]>;
	status: UserStatusEnum;
	telegramId?: Maybe<Scalars["String"]["output"]>;
	telegramToken?: Maybe<Scalars["String"]["output"]>;
	theme: UserThemeEnum;
	updatedAt: Scalars["DateTime"]["output"];
	verificationCode?: Maybe<Scalars["Int"]["output"]>;
}

export interface UserInput {
	address?: InputMaybe<AddressToUserInput>;
	deviceId?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	googleId?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	ordersToUser?: InputMaybe<UserToOrderInput[]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	phone?: InputMaybe<Scalars["String"]["input"]>;
	sessionId?: InputMaybe<Scalars["String"]["input"]>;
	status: UserStatusEnum;
	telegramId?: InputMaybe<Scalars["String"]["input"]>;
	telegramToken?: InputMaybe<Scalars["String"]["input"]>;
	theme: UserThemeEnum;
	verificationCode?: InputMaybe<Scalars["Int"]["input"]>;
}

export enum UserStatusEnum {
	NotVerified = "NOT_VERIFIED",
	Verified = "VERIFIED"
}

export enum UserThemeEnum {
	Dark = "DARK",
	Light = "LIGHT"
}

export interface UserToOrderEntity {
	__typename?: "UserToOrderEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	order: ActiveOrderEntity;
	owner: Scalars["Boolean"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
}

export interface UserToOrderInput {
	order: ActiveOrderInput;
	owner: Scalars["Boolean"]["input"];
	user: UserInput;
}

export interface UserToPlaceEntity {
	__typename?: "UserToPlaceEntity";
	accountingSystemFields?: Maybe<Scalars["JSONObject"]["output"]>;
	bonusCount?: Maybe<Scalars["Float"]["output"]>;
	bonusReceivedTotal?: Maybe<Scalars["Float"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	lastVisited: Scalars["DateTime"]["output"];
	liked: Scalars["Boolean"]["output"];
	place: PlaceEntity;
	role: UserToPlaceRoleEnum;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
	visits: Scalars["Int"]["output"];
}

export interface UserToPlaceInput {
	accountingSystemFields?: InputMaybe<Scalars["JSONObject"]["input"]>;
	bonusCount?: InputMaybe<Scalars["Float"]["input"]>;
	bonusReceivedTotal?: InputMaybe<Scalars["Float"]["input"]>;
	lastVisited: Scalars["DateTime"]["input"];
	liked: Scalars["Boolean"]["input"];
	place: PlaceInput;
	role: UserToPlaceRoleEnum;
	user: UserInput;
	visits: Scalars["Int"]["input"];
}

export enum UserToPlaceRoleEnum {
	Courier = "COURIER",
	Customer = "CUSTOMER",
	Employee = "EMPLOYEE",
	Hookah = "HOOKAH",
	Hostess = "HOSTESS",
	Manager = "MANAGER",
	Waiter = "WAITER"
}

export interface UserToProductEntity {
	__typename?: "UserToProductEntity";
	count: Scalars["Int"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	liked: Scalars["Boolean"]["output"];
	product: ProductEntity;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
	usersToProduct: UserToProductEntity[];
}

export interface UserToProductInput {
	count: Scalars["Int"]["input"];
	liked: Scalars["Boolean"]["input"];
	product: ProductInput;
	user: UserInput;
}

export interface UserToReelEntity {
	__typename?: "UserToReelEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["String"]["output"];
	liked: Scalars["Boolean"]["output"];
	reel: ReelEntity;
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
}

export interface UserToReelInput {
	liked: Scalars["Boolean"]["input"];
	reel: ReelInput;
	user: UserInput;
}
