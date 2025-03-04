const mongoose = require("mongoose");
const PLAN = require("../enums/plan.enums");
const WAYS = require("../enums/ways.enums");
const User = require("./users.models");

const planSchema = new mongoose.Schema({
    name: {
        type: String,

        enum: Object.values(PLAN).map((plan) => plan.name),

        required: true,
    },
    obtainedBy: {
        type: String,
        enum: Object.values(WAYS),
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reffered: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
});

const tokenSchema = new mongoose.Schema({
    currentLimit: {
        type: Number,
        default: PLAN.FREE.limit,
    },

    maxLimit: {
        type: Number,
        default: PLAN.FREE.limit,
    },

    expairyDate: {
        type: Date,
        default: Date.now() + PLAN.FREE.expairy * 24 * 60 * 60 * 1000,
    },

    plans: {
        type: [planSchema],
        default: [
            {
                name: PLAN.FREE.name,
                obtainedBy: WAYS.SIGNUP,
            },
        ],
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// circular access error
// tokenSchema.pre("save", async function (next) {
//     console.log("User id", this.user);
//     const user = await User.findById(this.user);
//     user.current_limit = this.currentLimit;
//     user.max_limit = this.maxLimit;
//     await user.save();
//     next();
// });

tokenSchema.methods.descreseLimit = async function () {
    console.log("User current limit", this.currentLimit);
    if (this.currentLimit > 0) {
        this.currentLimit -= 1;
        this.updatedAt = Date.now();
        console.log("User limit decreased to ", this.currentLimit);
        return this.save();
    } else {
        throw new Error("No credit left!");
    }
};

tokenSchema.methods.isValid = function () {
    return this.currentLimit > 0 && this.expairyDate >= Date.now();
};

tokenSchema.methods.hasValidity = function () {
    return this.expairyDate >= Date.now();
};

tokenSchema.methods.getPlansDetails = function () {
    return this.plans.map((plan) => {
        const planDetails = PLAN[plan.name]; // need testing
        return {
            name: plan.name,
            obtainedBy: plan.obtainedBy,
            reffered: plan.reffered,
            createdAt: plan.createdAt,
            validTill:
                planDetails.expairy == -1
                    ? this.expairyDate
                    : new Date(
                          plan.createdAt.getTime() +
                              planDetails.expairy * 24 * 60 * 60 * 1000
                      ),
            price: planDetails.price,
            creditOptained: planDetails.limit,
        };
    });
};

tokenSchema.methods.getCurrentPlan = function (name) {
    return {
        currentLimit: this.currentLimit,
        maxLimit: this.maxLimit,
        expairyDate: this.expairyDate,
    };
};

tokenSchema.methods.addPlanDirectBuy = function (plan) {
    const planData = {
        name: plan.name,
        obtainedBy: WAYS.DIRECT,
    };
    this.plans.push(planData);
    this.currentLimit += plan.limit;
    this.maxLimit += plan.limit;

    if (plan.expairy != -1) {
        this.expairyDate = Math.max(
            Date.now() + plan.expairy * 24 * 60 * 60 * 1000,
            this.expairyDate
        );
    }

    this.updatedAt = Date.now();
    return this.save();
};

tokenSchema.methods.addPlanRefferal = function (reffered) {
    const refferedPlan = PLAN.MONTHLY;
    const planData = {
        name: refferedPlan.name,
        obtainedBy: WAYS.REFFERAL,
        reffered,
    };
    this.plans.push(planData);
    this.currentLimit += refferedPlan.limit;
    this.maxLimit += refferedPlan.limit;
    this.expairyDate = Math.max(
        Date.now() + refferedPlan.expairy * 24 * 60 * 60 * 1000,
        this.expairyDate
    );
    this.updatedAt = Date.now();
    return this.save();
};

tokenSchema.methods.addPlanByAdmin = async function (credit, days) {
    const planData = {
        name: PLAN.ADMIN.name,
        obtainedBy: WAYS.ADMIN,
    };
    this.plans.push(planData);
    this.currentLimit += credit;
    this.maxLimit += credit;
    this.expairyDate = Math.max(
        Date.now() + days * 24 * 60 * 60 * 1000,
        this.expairyDate
    );
    this.updatedAt = Date.now();
    return await this.save();
};
module.exports = mongoose.model("Token", tokenSchema);
