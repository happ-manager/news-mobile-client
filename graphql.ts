export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = Partial<Record<K, never>>;
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	Void: { input: any; output: any };
}

export interface ArticleEntity {
	__typename?: "ArticleEntity";
	articlesToCategories: ArticleToCategoryEntity[];
	content: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	image?: Maybe<FileEntity>;
	position: Scalars["Int"]["output"];
	tagsToArticles: TagToArticleEntity[];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface ArticleToCategoryEntity {
	__typename?: "ArticleToCategoryEntity";
	article: ArticleEntity;
	category: CategoryEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	position: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface AuthTokensDto {
	__typename?: "AuthTokensDto";
	accessToken: Scalars["String"]["output"];
	expiresIn: Scalars["Float"]["output"];
	refreshToken: Scalars["String"]["output"];
}

export interface CategoryEntity {
	__typename?: "CategoryEntity";
	articlesToCategories: ArticleToCategoryEntity[];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	image?: Maybe<FileEntity>;
	name: Scalars["String"]["output"];
	position: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	usersToCategories: UserToCategoryEntity[];
}

export interface CreateArticleDto {
	description: Scalars["String"]["input"];
	title: Scalars["String"]["input"];
}

export interface CreateArticleToCategoryInput {
	article: IdInput;
	category: IdInput;
	position: Scalars["Int"]["input"];
}

export interface CreateCategoryInput {
	articlesToCategories?: InputMaybe<IdInput[]>;
	name: Scalars["String"]["input"];
	position?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface CreateTagDto {
	name: Scalars["String"]["input"];
}

export interface CreateTagToArticleInput {
	article: IdInput;
	tag: IdInput;
}

export interface CreateUserInput {
	tel: Scalars["String"]["input"];
	verificationCode: Scalars["String"]["input"];
}

export interface CreateUserToCategoryInput {
	tag: IdInput;
	user: IdInput;
}

export interface FileEntity {
	__typename?: "FileEntity";
	bucket?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	key?: Maybe<Scalars["String"]["output"]>;
	mime?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	size?: Maybe<Scalars["String"]["output"]>;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface IdInput {
	id: Scalars["String"]["input"];
}

export interface Mutation {
	__typename?: "Mutation";
	createArticle: ArticleEntity;
	createArticleToCategory: ArticleToCategoryEntity;
	createCategory: CategoryEntity;
	createTag: TagEntity;
	createTagToArticle: TagToArticleEntity;
	createUser: UserEntity;
	createUserToCategory: UserToCategoryEntity;
	deleteArticle: Scalars["Void"]["output"];
	deleteArticleToCategory: Scalars["Void"]["output"];
	deleteCategory: Scalars["Void"]["output"];
	deleteFile: Scalars["Void"]["output"];
	deleteTag: Scalars["Void"]["output"];
	deleteTagToArticle: Scalars["Void"]["output"];
	deleteUser: Scalars["Void"]["output"];
	deleteUserToCategory: Scalars["Void"]["output"];
	login: AuthTokensDto;
	me: AuthTokensDto;
	refreshTokens: AuthTokensDto;
	signInTelegram: AuthTokensDto;
	signUpTelegram: AuthTokensDto;
	updateArticle: ArticleEntity;
	updateArticleToCategory: ArticleToCategoryEntity;
	updateCategory: CategoryEntity;
	updateFile: FileEntity;
	updateTag: TagEntity;
	updateTagToArticle: TagToArticleEntity;
	updateUser: UserEntity;
	updateUserToCategory: UserToCategoryEntity;
	verifyCode: AuthTokensDto;
}

export interface MutationCreateArticleArgs {
	article: CreateArticleDto;
}

export interface MutationCreateArticleToCategoryArgs {
	articleToCategory: CreateArticleToCategoryInput;
}

export interface MutationCreateCategoryArgs {
	category: CreateCategoryInput;
}

export interface MutationCreateTagArgs {
	tag: CreateTagDto;
}

export interface MutationCreateTagToArticleArgs {
	userToCategory: CreateTagToArticleInput;
}

export interface MutationCreateUserArgs {
	user: CreateUserInput;
}

export interface MutationCreateUserToCategoryArgs {
	userToCategory: CreateUserToCategoryInput;
}

export interface MutationDeleteArticleArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteArticleToCategoryArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteCategoryArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteFileArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteTagArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteTagToArticleArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteUserArgs {
	id: Scalars["String"]["input"];
}

export interface MutationDeleteUserToCategoryArgs {
	id: Scalars["String"]["input"];
}

export interface MutationLoginArgs {
	tel: Scalars["String"]["input"];
}

export interface MutationRefreshTokensArgs {
	refreshToken: Scalars["String"]["input"];
}

export interface MutationSignInTelegramArgs {
	telegramId: Scalars["Float"]["input"];
}

export interface MutationSignUpTelegramArgs {
	telegramUser: TelegramUserInput;
}

export interface MutationUpdateArticleArgs {
	article: UpdateArticleDto;
}

export interface MutationUpdateArticleToCategoryArgs {
	articleToCategory: UpdateArticleToCategoryInput;
}

export interface MutationUpdateCategoryArgs {
	category: UpdateCategoryInput;
}

export interface MutationUpdateFileArgs {
	file: UpdateFileInput;
}

export interface MutationUpdateTagArgs {
	tag: UpdateTagDto;
}

export interface MutationUpdateTagToArticleArgs {
	userToCategory: UpdateTagToArticleInput;
}

export interface MutationUpdateUserArgs {
	user: UpdateUserInput;
}

export interface MutationUpdateUserToCategoryArgs {
	userToCategory: UpdateUserToCategoryInput;
}

export interface MutationVerifyCodeArgs {
	verificationCode: Scalars["String"]["input"];
}

export interface NewArticleEvent {
	__typename?: "NewArticleEvent";
	article: ArticleEntity;
	users: UserEntity[];
}

export interface PaginatedArticles {
	__typename?: "PaginatedArticles";
	data: ArticleEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedArticlesToCategories {
	__typename?: "PaginatedArticlesToCategories";
	data: ArticleToCategoryEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedCategories {
	__typename?: "PaginatedCategories";
	data: CategoryEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedFiles {
	__typename?: "PaginatedFiles";
	data: FileEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTags {
	__typename?: "PaginatedTags";
	data: TagEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedTagsToArticles {
	__typename?: "PaginatedTagsToArticles";
	data: TagToArticleEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedUsers {
	__typename?: "PaginatedUsers";
	data: UserEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface PaginatedUsersToTags {
	__typename?: "PaginatedUsersToTags";
	data: UserToCategoryEntity[];
	page: Scalars["Int"]["output"];
	totalCount: Scalars["Int"]["output"];
}

export interface Query {
	__typename?: "Query";
	article: ArticleEntity;
	articleToCategory: ArticleToCategoryEntity;
	articles: PaginatedArticles;
	articlesToCategories: PaginatedArticlesToCategories;
	categories: PaginatedCategories;
	category: CategoryEntity;
	file: FileEntity;
	files: PaginatedFiles;
	getArticleEvents: ArticlesEventsEnum[];
	getErrors: ErrorsEnum[];
	getTelegramEvents: NewArticleEvent[];
	tag: TagEntity;
	tags: PaginatedTags;
	user: UserEntity;
	userToCategory: TagToArticleEntity;
	users: PaginatedUsers;
	usersToCategories: PaginatedTagsToArticles;
}

export interface QueryArticleArgs {
	id: Scalars["ID"]["input"];
}

export interface QueryArticleToCategoryArgs {
	id: Scalars["ID"]["input"];
}

export interface QueryArticlesArgs {
	categoryId?: InputMaybe<Scalars["String"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryArticlesToCategoriesArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCategoriesArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryCategoryArgs {
	id: Scalars["ID"]["input"];
}

export interface QueryFilesArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryTagArgs {
	id: Scalars["ID"]["input"];
}

export interface QueryTagsArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUserArgs {
	id: Scalars["ID"]["input"];
}

export interface QueryUsersArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface QueryUsersToCategoriesArgs {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface TagEntity {
	__typename?: "TagEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	position: Scalars["Int"]["output"];
	tagsToArticles: TagToArticleEntity[];
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TagToArticleEntity {
	__typename?: "TagToArticleEntity";
	article: ArticleEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	position: Scalars["Int"]["output"];
	tag: TagEntity;
	updatedAt: Scalars["DateTime"]["output"];
}

export interface TelegramUserInput {
	added_to_attachment_menu?: InputMaybe<Scalars["Boolean"]["input"]>;
	first_name: Scalars["String"]["input"];
	id: Scalars["Float"]["input"];
	is_bot?: InputMaybe<Scalars["Boolean"]["input"]>;
	is_premium?: InputMaybe<Scalars["Boolean"]["input"]>;
	language_code?: InputMaybe<Scalars["String"]["input"]>;
	last_name?: InputMaybe<Scalars["String"]["input"]>;
	phone: Scalars["String"]["input"];
	username?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UpdateArticleDto {
	id: Scalars["ID"]["input"];
}

export interface UpdateArticleToCategoryInput {
	article: IdInput;
	category: IdInput;
	id: Scalars["ID"]["input"];
	position: Scalars["Int"]["input"];
}

export interface UpdateCategoryInput {
	id: Scalars["ID"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
	position?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface UpdateFileInput {
	bucket: Scalars["String"]["input"];
	id: Scalars["ID"]["input"];
	key: Scalars["String"]["input"];
	mime: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	size: Scalars["String"]["input"];
}

export interface UpdateTagDto {
	id: Scalars["ID"]["input"];
}

export interface UpdateTagToArticleInput {
	article: IdInput;
	id: Scalars["ID"]["input"];
	tag: IdInput;
}

export interface UpdateUserInput {
	id: Scalars["ID"]["input"];
	tel: Scalars["String"]["input"];
	verificationCode: Scalars["String"]["input"];
}

export interface UpdateUserToCategoryInput {
	id: Scalars["ID"]["input"];
	tag: IdInput;
	user: IdInput;
}

export interface UserEntity {
	__typename?: "UserEntity";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	name?: Maybe<Scalars["String"]["output"]>;
	tel: Scalars["String"]["output"];
	telegramId?: Maybe<Scalars["Float"]["output"]>;
	updatedAt: Scalars["DateTime"]["output"];
	usersToCategories: UserToCategoryEntity[];
	usersToTags: UserToCategoryEntity[];
	verificationCode?: Maybe<Scalars["String"]["output"]>;
	verificationStatus: VerificationStatusEnum;
}

export interface UserToCategoryEntity {
	__typename?: "UserToCategoryEntity";
	category: TagEntity;
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	position: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	user: UserEntity;
}

export enum ArticlesEventsEnum {
	NewArticle = "NEW_ARTICLE"
}

export enum ErrorsEnum {
	AuthorizationHeaderIsMissing = "AuthorizationHeaderIsMissing",
	Forbidden = "Forbidden",
	InternalServerError = "InternalServerError",
	InvalidEncryption = "InvalidEncryption",
	InvalidEncryptionLength = "InvalidEncryptionLength",
	InvalidEnum = "InvalidEnum",
	InvalidPassword = "InvalidPassword",
	InvalidToken = "InvalidToken",
	InvalidVerificationCode = "InvalidVerificationCode",
	IsArray = "IsArray",
	IsDate = "IsDate",
	IsEmail = "IsEmail",
	IsNotEmpty = "IsNotEmpty",
	IsNumber = "IsNumber",
	IsObject = "IsObject",
	IsString = "IsString",
	Max = "Max",
	MaxLength = "MaxLength",
	Min = "Min",
	MinLength = "MinLength",
	NotFound = "NotFound",
	TokenIsMissing = "TokenIsMissing",
	UserAlreadyExist = "UserAlreadyExist",
	UserNotExist = "UserNotExist",
	UserNotFound = "UserNotFound",
	UserNotVerified = "UserNotVerified"
}

export enum VerificationStatusEnum {
	NotVerified = "NOT_VERIFIED",
	Verified = "VERIFIED"
}
