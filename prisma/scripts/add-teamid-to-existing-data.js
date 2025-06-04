"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var brandIdentities, _i, brandIdentities_1, bi, membership, ideabankEntries, _a, ideabankEntries_1, entry, membership, contentRequests, _b, contentRequests_1, req, membership, generatedContents, _c, generatedContents_1, gc_1, req, socialConnections, _d, socialConnections_1, sc, membership, feedbacks, _e, feedbacks_1, fb, req, scheduledPosts, _f, scheduledPosts_1, sp, gc_2;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, prisma.brandIdentity.findMany({ where: { teamId: null } })];
                case 1:
                    brandIdentities = _g.sent();
                    _i = 0, brandIdentities_1 = brandIdentities;
                    _g.label = 2;
                case 2:
                    if (!(_i < brandIdentities_1.length)) return [3 /*break*/, 6];
                    bi = brandIdentities_1[_i];
                    return [4 /*yield*/, prisma.teamMember.findFirst({ where: { userId: bi.userId } })];
                case 3:
                    membership = _g.sent();
                    if (!membership) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.brandIdentity.update({
                            where: { id: bi.id },
                            data: { teamId: membership.teamId },
                        })];
                case 4:
                    _g.sent();
                    console.log("Updated BrandIdentity ".concat(bi.id, " with teamId ").concat(membership.teamId));
                    _g.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6: return [4 /*yield*/, prisma.ideabankEntry.findMany({ where: { teamId: null } })];
                case 7:
                    ideabankEntries = _g.sent();
                    _a = 0, ideabankEntries_1 = ideabankEntries;
                    _g.label = 8;
                case 8:
                    if (!(_a < ideabankEntries_1.length)) return [3 /*break*/, 12];
                    entry = ideabankEntries_1[_a];
                    return [4 /*yield*/, prisma.teamMember.findFirst({ where: { userId: entry.userId } })];
                case 9:
                    membership = _g.sent();
                    if (!membership) return [3 /*break*/, 11];
                    return [4 /*yield*/, prisma.ideabankEntry.update({
                            where: { id: entry.id },
                            data: { teamId: membership.teamId },
                        })];
                case 10:
                    _g.sent();
                    console.log("Updated IdeabankEntry ".concat(entry.id, " with teamId ").concat(membership.teamId));
                    _g.label = 11;
                case 11:
                    _a++;
                    return [3 /*break*/, 8];
                case 12: return [4 /*yield*/, prisma.contentRequest.findMany({ where: { teamId: null } })];
                case 13:
                    contentRequests = _g.sent();
                    _b = 0, contentRequests_1 = contentRequests;
                    _g.label = 14;
                case 14:
                    if (!(_b < contentRequests_1.length)) return [3 /*break*/, 18];
                    req = contentRequests_1[_b];
                    return [4 /*yield*/, prisma.teamMember.findFirst({ where: { userId: req.userId } })];
                case 15:
                    membership = _g.sent();
                    if (!membership) return [3 /*break*/, 17];
                    return [4 /*yield*/, prisma.contentRequest.update({
                            where: { id: req.id },
                            data: { teamId: membership.teamId },
                        })];
                case 16:
                    _g.sent();
                    console.log("Updated ContentRequest ".concat(req.id, " with teamId ").concat(membership.teamId));
                    _g.label = 17;
                case 17:
                    _b++;
                    return [3 /*break*/, 14];
                case 18: return [4 /*yield*/, prisma.generatedContent.findMany({ where: { teamId: null } })];
                case 19:
                    generatedContents = _g.sent();
                    _c = 0, generatedContents_1 = generatedContents;
                    _g.label = 20;
                case 20:
                    if (!(_c < generatedContents_1.length)) return [3 /*break*/, 24];
                    gc_1 = generatedContents_1[_c];
                    return [4 /*yield*/, prisma.contentRequest.findUnique({ where: { id: gc_1.requestId } })];
                case 21:
                    req = _g.sent();
                    if (!(req && req.teamId)) return [3 /*break*/, 23];
                    return [4 /*yield*/, prisma.generatedContent.update({
                            where: { id: gc_1.id },
                            data: { teamId: req.teamId },
                        })];
                case 22:
                    _g.sent();
                    console.log("Updated GeneratedContent ".concat(gc_1.id, " with teamId ").concat(req.teamId));
                    _g.label = 23;
                case 23:
                    _c++;
                    return [3 /*break*/, 20];
                case 24: return [4 /*yield*/, prisma.socialConnection.findMany({ where: { teamId: null } })];
                case 25:
                    socialConnections = _g.sent();
                    _d = 0, socialConnections_1 = socialConnections;
                    _g.label = 26;
                case 26:
                    if (!(_d < socialConnections_1.length)) return [3 /*break*/, 30];
                    sc = socialConnections_1[_d];
                    return [4 /*yield*/, prisma.teamMember.findFirst({ where: { userId: sc.userId } })];
                case 27:
                    membership = _g.sent();
                    if (!membership) return [3 /*break*/, 29];
                    return [4 /*yield*/, prisma.socialConnection.update({
                            where: { id: sc.id },
                            data: { teamId: membership.teamId },
                        })];
                case 28:
                    _g.sent();
                    console.log("Updated SocialConnection ".concat(sc.id, " with teamId ").concat(membership.teamId));
                    _g.label = 29;
                case 29:
                    _d++;
                    return [3 /*break*/, 26];
                case 30: return [4 /*yield*/, prisma.contentFeedback.findMany({ where: { teamId: null } })];
                case 31:
                    feedbacks = _g.sent();
                    _e = 0, feedbacks_1 = feedbacks;
                    _g.label = 32;
                case 32:
                    if (!(_e < feedbacks_1.length)) return [3 /*break*/, 36];
                    fb = feedbacks_1[_e];
                    return [4 /*yield*/, prisma.contentRequest.findUnique({ where: { id: fb.requestId } })];
                case 33:
                    req = _g.sent();
                    if (!(req && req.teamId)) return [3 /*break*/, 35];
                    return [4 /*yield*/, prisma.contentFeedback.update({
                            where: { id: fb.id },
                            data: { teamId: req.teamId },
                        })];
                case 34:
                    _g.sent();
                    console.log("Updated ContentFeedback ".concat(fb.id, " with teamId ").concat(req.teamId));
                    _g.label = 35;
                case 35:
                    _e++;
                    return [3 /*break*/, 32];
                case 36: return [4 /*yield*/, prisma.scheduledPost.findMany({ where: { teamId: null } })];
                case 37:
                    scheduledPosts = _g.sent();
                    _f = 0, scheduledPosts_1 = scheduledPosts;
                    _g.label = 38;
                case 38:
                    if (!(_f < scheduledPosts_1.length)) return [3 /*break*/, 42];
                    sp = scheduledPosts_1[_f];
                    return [4 /*yield*/, prisma.generatedContent.findUnique({ where: { id: sp.contentId } })];
                case 39:
                    gc_2 = _g.sent();
                    if (!(gc_2 && gc_2.teamId)) return [3 /*break*/, 41];
                    return [4 /*yield*/, prisma.scheduledPost.update({
                            where: { id: sp.id },
                            data: { teamId: gc_2.teamId },
                        })];
                case 40:
                    _g.sent();
                    console.log("Updated ScheduledPost ".concat(sp.id, " with teamId ").concat(gc_2.teamId));
                    _g.label = 41;
                case 41:
                    _f++;
                    return [3 /*break*/, 38];
                case 42:
                    console.log('Migration complete!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
