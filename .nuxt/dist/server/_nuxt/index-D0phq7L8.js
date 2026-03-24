import { _ as __nuxt_component_0$1 } from "./Modal-BsfxzNKR.js";
import { u as useFormGroup, _ as __nuxt_component_2 } from "./Input-OFElHbVA.js";
import { u as useInjectButtonGroup, _ as __nuxt_component_0$2 } from "./Button-BkeWMuC1.js";
import { _ as __nuxt_component_1 } from "./SelectMenu-DqIV9qnj.js";
import { _ as __nuxt_component_0 } from "./Icon-DWHer77Q.js";
import { defineComponent, mergeProps, toRef, computed, useSSRContext, ref, watch, withCtx, createVNode, createTextVNode, unref, createBlock, createCommentVNode, openBlock, withDirectives, toDisplayString, vModelText } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { _ as _export_sfc, m as mergeConfig, j as useUI, k as appConfig, s as select, q as get } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { h as hostUrl, a as apiPost, c as api, b as apiPoint } from "./api-DKaA_XRh.js";
import * as XLSX from "xlsx/dist/xlsx.full.min.js";
import "vue-qrcode-reader";
import "./disposables-ze0J46BC.js";
import "defu";
import "./Avatar-C3pGi2x7.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "klona";
import "devalue";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "axios";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emitFormChange();
      emit("change", event);
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      normalizedOptionsWithPlaceholder,
      normalizedValue,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><select${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.selectClass
  }, _ctx.attrs))}><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])}><!--[-->`);
      ssrRenderList(option.children, (childOption, index2) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""}>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""}>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: {
    QrcodeStream: () => import("vue-qrcode-reader").then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const GenerateUUID = () => {
      const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0; i < 10; i++) {
        const r = Math.floor(Math.random() * chars.length);
        result += chars[r];
      }
      return result;
    };
    ref(false);
    ref("");
    const teacherInfo = ref({});
    const logout = () => {
      sessionStorage.removeItem("idnt_code");
      sessionStorage.removeItem("student");
      sessionStorage.removeItem("t_idnt_code");
      sessionStorage.removeItem("teacher");
      (void 0).location.href = "/login";
    };
    const points = ref([]);
    const deposits = ref([]);
    ref(1);
    const isLoading = ref(false);
    ref(true);
    const studentOptions = ref([]);
    const selectedStudent = ref(null);
    const selectedStudentName = ref(null);
    const selectedStudentData = ref(null);
    const bankerRoleIdx = ref(null);
    ref(null);
    const fetchStudents = async () => {
      var _a;
      const teacher = (_a = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a.idx;
      if (!teacher)
        return;
      const res = await apiPost("member.php", {
        mode: "studentList",
        teacher
      });
      if (res.result === "SUCCESS") {
        memberPoint.value = await apiPoint();
        studentOptions.value = res.data.map((s) => ({
          ...s,
          label: s.student_name,
          value: s.idnt_code
        }));
      }
    };
    const memberPoint = ref(0);
    const handleBankerToggle = async () => {
      var _a;
      if (!selectedStudentData.value)
        return;
      const teacher = (_a = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a.idx;
      const isCurrentlyBanker = Number(selectedStudentData.value.role_code) === Number(bankerRoleIdx.value);
      const res = await apiPost("teacher.php", {
        mode: "updateStudentRole",
        student_idx: selectedStudentData.value.idx,
        teacher_idx: teacher,
        action: isCurrentlyBanker ? "unset" : "set"
      });
      if (res.result === "SUCCESS") {
        alert(isCurrentlyBanker ? "은행원 권한이 해제되었습니다." : "은행원으로 등록되었습니다.");
        await fetchStudents();
        selectedStudentData.value = studentOptions.value.find((s) => s.value === selectedStudent.value);
      } else {
        alert(res.message || "업데이트 실패");
      }
    };
    const saveClassSettings = async () => {
      const res = await apiPost("teacher.php", {
        mode: "updateInfo",
        idnt_code: sessionStorage.getItem("t_idnt_code"),
        class_name: teacherInfo.value.class_name || "",
        currency_name: teacherInfo.value.currency_name || "",
        deposit_name: teacherInfo.value.deposit_name || "",
        deposit_cycle: teacherInfo.value.deposit_cycle || "",
        deposit_interest: teacherInfo.value.deposit_interest || 0,
        deposit_amount: teacherInfo.value.deposit_amount || 0,
        deposit_min: teacherInfo.value.deposit_min || 0,
        deposit_max: teacherInfo.value.deposit_max || 0,
        mb_grade: teacherInfo.value.mb_grade || "",
        mb_class: teacherInfo.value.mb_class || "",
        mb_school: teacherInfo.value.mb_school || "",
        mb_school_code: teacherInfo.value.mb_school_code || "",
        mb_tel: teacherInfo.value.mb_tel || "",
        qr_bg: teacherInfo.value.qr_bg || "",
        qr_top: qrTop.value,
        qr_left: qrLeft.value,
        qr_width: qrWidth.value
      });
      if (res.result === "SUCCESS") {
        alert("저장되었습니다.");
      } else {
        alert("저장에 실패했습니다.");
      }
    };
    const onClickReset = async () => {
      if (confirm("정말로 초기화 하시겠습니까?\n선생님 데이터를 제외하고 모든 데이터(학생, 포인트 등)가 삭제됩니다.\n(삭제 전 백업이 생성됩니다.)")) {
        const res = await apiPost("teacher.php", {
          mode: "resetAllData",
          idnt_code: sessionStorage.getItem("t_idnt_code")
        });
        if (res.result === "SUCCESS") {
          alert("초기화가 완료되었습니다.");
          (void 0).location.reload();
        } else {
          alert("초기화 실패: " + (res.message || "알 수 없는 오류"));
        }
      }
    };
    const onClickDownload = () => {
      (void 0).open("http://api.school-os.net/jelly/data/class.xlsx");
    };
    const printStudentQR = () => {
      if (!teacherInfo.value.class_name || !teacherInfo.value.currency_name)
        return alert("우리반 설정 완료 후 가능합니다.");
      (void 0).open("https://api.school-os.net/jelly/qr.php?idnt_code=" + sessionStorage.getItem("t_idnt_code"));
    };
    const onClickLogin = () => {
      (void 0).open("/teacher/login?id=" + selectedStudent.value);
    };
    const isUploadModalOpen = ref(false);
    const uploadedFile = ref(null);
    const handleFileUpload = async (e) => {
      const file = uploadedFile.value;
      if (!file) {
        alert("파일을 선택해주세요");
        return;
      }
      const reader = new FileReader();
      reader.onload = async (evt) => {
        var _a, _b;
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
        const students = jsonData.map((row) => {
          var _a2;
          return {
            idnt_code: GenerateUUID(),
            // JS에서 UUID 생성하거나 서버에서 처리
            student_name: row["이름"],
            student_grade: row["학년"],
            student_class: row["반"],
            mb_point: row["포인트"] || 0,
            student_number: row["학번"],
            birth_date: row["생년월일"],
            // YYYY-MM-DD 형식
            gender: row["성별"],
            guardian_name: row["보호자"],
            guardian_phone: row["연락처"],
            address: row["주소"],
            teacher: (_a2 = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a2.idx,
            pay_name: row["화폐이름"],
            role_code: null
          };
        }).concat([
          {
            idnt_code: GenerateUUID(),
            student_name: "선생님",
            student_grade: null,
            student_class: null,
            mb_point: 0,
            student_number: 0,
            birth_date: null,
            gender: null,
            guardian_name: null,
            guardian_phone: null,
            address: null,
            teacher: (_a = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a.idx,
            pay_name: null,
            role_code: "1"
          },
          {
            idnt_code: GenerateUUID(),
            student_name: "관리자",
            student_grade: null,
            student_class: null,
            mb_point: 0,
            student_number: 0,
            birth_date: null,
            gender: null,
            guardian_name: null,
            guardian_phone: null,
            address: null,
            teacher: (_b = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _b.idx,
            pay_name: null,
            role_code: "1"
          }
        ]);
        console.log(students);
        try {
          const res = await apiPost("teacher.php", {
            mode: "studentInsert",
            data: students
          });
          if (res.result === "SUCCESS") {
            alert("업로드 성공");
            (void 0).location.reload();
          } else {
            alert(res.message || "업로드 실패");
          }
        } catch (error2) {
          alert("서버 오류 발생");
          console.error(error2);
        }
      };
      reader.readAsArrayBuffer(file);
    };
    const onClickUpload = () => {
      isUploadModalOpen.value = true;
    };
    const onFileChange = (e) => {
      uploadedFile.value = e.target.files[0];
    };
    const isHistoryModalOpen = ref(false);
    const historyTitle = ref("");
    const historyList = ref([]);
    const openHistoryModal = async (type) => {
      historyTitle.value = type === "tax" ? "세금 내역" : "벌금 내역";
      const res = await apiPost("bank.php", {
        mode: "historyByType",
        idnt_code: sessionStorage.getItem("t_idnt_code"),
        type
        // 'tax' or 'penalty'
      });
      historyList.value = res.data || [];
      isHistoryModalOpen.value = true;
    };
    const isQRDesignModalOpen = ref(false);
    const uploadedQRBg = ref(null);
    const previewQRBg = ref(null);
    const onQRBgChange = (e) => {
      const file = e.target.files[0];
      if (!file)
        return;
      uploadedQRBg.value = file;
      previewQRBg.value = URL.createObjectURL(file);
    };
    const qrTop = ref(0);
    const qrLeft = ref(0);
    const qrWidth = ref(100);
    watch(teacherInfo, (newVal) => {
      if (newVal) {
        qrTop.value = newVal.qr_top || 0;
        qrLeft.value = newVal.qr_left || 0;
        qrWidth.value = newVal.qr_width || 100;
      }
    }, { immediate: true });
    const handleQRBgUpload = async () => {
      if (!uploadedQRBg.value && !teacherInfo.value.qr_bg)
        return alert("이미지를 선택해주세요.");
      const formData = new FormData();
      if (uploadedQRBg.value)
        formData.append("file", uploadedQRBg.value);
      formData.append("mode", "uploadQRBg");
      formData.append("idnt_code", sessionStorage.getItem("t_idnt_code"));
      formData.append("qr_top", qrTop.value);
      formData.append("qr_left", qrLeft.value);
      formData.append("qr_width", qrWidth.value);
      try {
        const res = await api.post("teacher.php", formData);
        if (res.result === "SUCCESS") {
          if (res.url)
            teacherInfo.value.qr_bg = res.url;
          alert("저장되었습니다.");
          isQRDesignModalOpen.value = false;
        } else {
          alert("업로드 실패: " + (res.message || "알 수 없는 오류"));
        }
      } catch (e) {
        console.error("QR배경 업로드 실패:", e);
        alert("업로드 오류 발생: " + (e.message || "네트워크 상태를 확인해주세요."));
      }
    };
    const fetchSchools = async (q) => {
      if (!q)
        return [];
      const res = await apiPost("teacher.php", {
        mode: "schoolList",
        school: q
      });
      if (res.result === "SUCCESS") {
        return res.data.map((item) => ({
          label: item.school,
          value: item.idx
        }));
      }
      return [];
    };
    const onSelectSchool = (school) => {
      if (school) {
        teacherInfo.value.mb_school = school.label;
        teacherInfo.value.mb_school_code = school.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_UModal = __nuxt_component_0$1;
      const _component_UInput = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$2;
      const _component_USelectMenu = __nuxt_component_1;
      const _component_USelect = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isUploadModalOpen.value,
        "onUpdate:modelValue": ($event) => isUploadModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 space-y-4"${_scopeId}><h2 class="text-lg font-bold"${_scopeId}>엑셀 업로드</h2>`);
            _push2(ssrRenderComponent(_component_UInput, {
              type: "file",
              accept: ".xls,.xlsx",
              onChange: onFileChange
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "취소",
              color: "gray",
              onClick: ($event) => isUploadModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "업로드",
              color: "blue",
              onClick: handleFileUpload
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 space-y-4" }, [
                createVNode("h2", { class: "text-lg font-bold" }, "엑셀 업로드"),
                createVNode(_component_UInput, {
                  type: "file",
                  accept: ".xls,.xlsx",
                  onChange: onFileChange
                }),
                createVNode("div", { class: "flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    label: "취소",
                    color: "gray",
                    onClick: ($event) => isUploadModalOpen.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    label: "업로드",
                    color: "blue",
                    onClick: handleFileUpload
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-6"><div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100"><div><h1 class="text-2xl font-black text-gray-800 flex items-center gap-2"><span class="text-3xl">👋</span> ${ssrInterpolate((_a = teacherInfo.value) == null ? void 0 : _a.mb_name)} <span class="text-blue-500 text-lg font-bold">선생님</span></h1><p class="text-sm text-gray-400 font-medium ml-10">귀염둥이 6학년 친구들과 함께하는 경제 교실</p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "로그아웃",
        color: "gray",
        variant: "ghost",
        icon: "i-heroicons-arrow-right-on-rectangle",
        onClick: logout
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "DB 초기화",
        color: "red",
        variant: "soft",
        icon: "i-heroicons-trash",
        onClick: onClickReset
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "엑셀 샘플",
        icon: "i-heroicons-document-arrow-down",
        color: "white",
        variant: "solid",
        onClick: onClickDownload,
        class: "rounded-xl px-4 py-2 shadow-sm border-gray-200"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "엑셀 업로드",
        icon: "i-heroicons-cloud-arrow-up",
        color: "white",
        variant: "solid",
        onClick: onClickUpload,
        class: "rounded-xl px-4 py-2 shadow-sm border-gray-200"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "학생 QR 전체 인쇄",
        icon: "i-heroicons-printer",
        color: "white",
        variant: "solid",
        onClick: printStudentQR,
        class: "rounded-xl px-4 py-2 shadow-sm border-gray-200"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "QR 카드 디자인",
        icon: "i-heroicons-paint-brush",
        color: "purple",
        onClick: ($event) => isQRDesignModalOpen.value = true,
        class: "rounded-xl px-6 py-2 shadow-md shadow-purple-100 font-bold"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1"><div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500"><span class="i-heroicons-banknotes w-32 h-32"></span></div><div class="flex justify-between items-start mb-4"><div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><span class="i-heroicons-building-library-solid w-6 h-6"></span></div><span class="text-[10px] font-bold tracking-widest uppercase opacity-60">National Treasury</span></div><p class="text-sm font-medium opacity-80 mb-1">현재 국고 잔액</p><div class="flex items-baseline gap-2"><span class="text-3xl font-black">${ssrInterpolate(Number(((_b = teacherInfo.value) == null ? void 0 : _b.mb_point) || 0).toLocaleString())}</span><span class="text-sm font-bold opacity-70">${ssrInterpolate((_c = teacherInfo.value) == null ? void 0 : _c.currency_name)}</span></div></div><div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 p-6 text-white shadow-xl shadow-orange-200 transition-all hover:-translate-y-1"><div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500"><span class="i-heroicons-document-text-solid w-32 h-32"></span></div><div class="flex justify-between items-start mb-4"><div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><span class="i-heroicons-receipt-percent-solid w-6 h-6"></span></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "내역 확인",
        size: "2xs",
        color: "white",
        variant: "soft",
        class: "bg-white/10 hover:bg-white/20 border-0",
        onClick: ($event) => openHistoryModal("tax")
      }, null, _parent));
      _push(`</div><p class="text-sm font-medium opacity-80 mb-1">우리반 누적 세금</p><div class="flex items-baseline gap-2"><span class="text-3xl font-black">${ssrInterpolate(Number(((_d = teacherInfo.value) == null ? void 0 : _d.tax) || 0).toLocaleString())}</span><span class="text-sm font-bold opacity-70">${ssrInterpolate((_e = teacherInfo.value) == null ? void 0 : _e.currency_name)}</span></div></div><div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-rose-400 via-red-500 to-red-600 p-6 text-white shadow-xl shadow-red-200 transition-all hover:-translate-y-1"><div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500"><span class="i-heroicons-exclamation-triangle-solid w-32 h-32"></span></div><div class="flex justify-between items-start mb-4"><div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><span class="i-heroicons-shield-exclamation-solid w-6 h-6"></span></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "벌금 관리",
        size: "2xs",
        color: "white",
        variant: "soft",
        class: "bg-white/10 hover:bg-white/20 border-0",
        onClick: ($event) => openHistoryModal("penalty")
      }, null, _parent));
      _push(`</div><p class="text-sm font-medium opacity-80 mb-1">우리반 누적 벌금</p><div class="flex items-baseline gap-2"><span class="text-3xl font-black">${ssrInterpolate(Number(((_f = teacherInfo.value) == null ? void 0 : _f.penalty) || 0).toLocaleString())}</span><span class="text-sm font-bold opacity-70">${ssrInterpolate((_g = teacherInfo.value) == null ? void 0 : _g.currency_name)}</span></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10"><div class="space-y-6"><section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col"><h2 class="text-lg font-black text-gray-800 mb-6 flex items-center gap-2"><div class="p-1.5 bg-blue-100 rounded-lg"><span class="i-heroicons-home-solid w-5 h-5 text-blue-600 outline-none"></span></div> 우리반 기본 정보 설정 </h2><div class="flex-1 space-y-6"><div class="space-y-1"><label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">소속 학교</label>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: teacherInfo.value.mb_school,
        "onUpdate:modelValue": [($event) => teacherInfo.value.mb_school = $event, onSelectSchool],
        searchable: fetchSchools,
        placeholder: "학교를 검색하세요...",
        size: "lg",
        class: "rounded-xl"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4"><div class="space-y-1"><label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">학년</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.mb_grade,
        "onUpdate:modelValue": ($event) => teacherInfo.value.mb_grade = $event,
        placeholder: "학년",
        type: "number",
        size: "xl"
      }, null, _parent));
      _push(`</div><div class="space-y-1"><label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">반</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.mb_class,
        "onUpdate:modelValue": ($event) => teacherInfo.value.mb_class = $event,
        placeholder: "반",
        type: "number",
        size: "xl"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4"><div class="space-y-1"><label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">학급명</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.class_name,
        "onUpdate:modelValue": ($event) => teacherInfo.value.class_name = $event,
        placeholder: "학급명 (예: 6-1 젤리반)",
        size: "xl"
      }, null, _parent));
      _push(`</div><div class="space-y-1"><label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">우리반 화폐단위</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.currency_name,
        "onUpdate:modelValue": ($event) => teacherInfo.value.currency_name = $event,
        placeholder: "단위 (예: 젤리)",
        size: "xl"
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "위 정보 모두 저장하기",
        color: "blue",
        size: "xl",
        block: "",
        class: "mt-8 font-black rounded-2xl py-4 shadow-lg shadow-blue-100",
        onClick: saveClassSettings
      }, null, _parent));
      _push(`</section></div><div class="space-y-6"><section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col"><h2 class="text-lg font-black text-gray-800 mb-2 flex items-center gap-2"><div class="p-1.5 bg-emerald-100 rounded-lg"><span class="i-heroicons-banknotes-solid w-5 h-5 text-emerald-600 outline-none"></span></div> 적금 예금 상품 관리 </h2><p class="text-xs text-gray-400 mb-6 ml-10">아이들이 목돈을 모을 수 있는 적금 상품을 설정하세요.</p><div class="flex-1 space-y-4"><div class="space-y-1"><label class="text-[10px] font-bold text-gray-400 ml-1 uppercase tracking-wider">적금 상품명</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_name,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_name = $event,
        placeholder: "예: 2주 단기 적금",
        size: "lg"
      }, null, _parent));
      _push(`</div><div class="bg-gray-50 p-4 rounded-2xl space-y-4"><div class="flex justify-between items-center"><span class="text-sm font-bold text-gray-600">적금 주기</span>`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: teacherInfo.value.deposit_cycle,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_cycle = $event,
        options: [
          { label: "사용안함", value: "" },
          { label: "2주 단기 적금", value: "2" },
          { label: "4주 장기 적금", value: "4" }
        ],
        size: "lg",
        class: "w-48"
      }, null, _parent));
      _push(`</div><div class="flex justify-between items-center"><span class="text-sm font-bold text-gray-600">이자율 (%)</span><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_interest,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_interest = $event,
        type: "number",
        size: "lg",
        class: "w-24 text-right"
      }, null, _parent));
      _push(`<span class="text-sm font-bold text-gray-500">%</span></div></div><div class="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100"><div class="space-y-1"><label class="text-[10px] font-bold text-gray-400 uppercase">최소 입금액</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_min,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_min = $event,
        type: "number",
        size: "lg"
      }, null, _parent));
      _push(`</div><div class="space-y-1"><label class="text-[10px] font-bold text-gray-400 uppercase">최대 입금액</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_max,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_max = $event,
        type: "number",
        size: "lg"
      }, null, _parent));
      _push(`</div></div></div><div class="p-2"><h3 class="text-xs font-black text-gray-400 mb-3 ml-1 uppercase tracking-widest">실시간 신청 현황</h3>`);
      if (deposits.value.length > 0) {
        _push(`<div class="max-h-[160px] overflow-y-auto space-y-2 pr-2 custom-scrollbar"><!--[-->`);
        ssrRenderList(deposits.value, (item) => {
          _push(`<div class="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100"><div class="flex items-center gap-3"><div class="bg-white p-1 rounded-full text-xs font-bold text-emerald-600 shadow-sm border border-emerald-100">${ssrInterpolate(item == null ? void 0 : item.student_name.substring(0, 1))}</div><div><p class="text-xs font-black text-gray-800">${ssrInterpolate(item == null ? void 0 : item.student_name)}</p><p class="text-[9px] text-gray-500 font-medium">${ssrInterpolate(item == null ? void 0 : item.start_date)} 가입</p></div></div><div class="text-right"><p class="text-xs font-black text-emerald-600">${ssrInterpolate(Number(item == null ? void 0 : item.amount).toLocaleString())}원금</p><p class="text-[9px] text-gray-400">+${ssrInterpolate(Number(item == null ? void 0 : item.amount_interest).toLocaleString())}이자 예정</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200"><p class="text-xs text-gray-400">신청된 적금 상품이 없습니다.</p></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "적금 설정 업데이트",
        color: "emerald",
        size: "xl",
        block: "",
        class: "mt-6 font-black rounded-2xl py-4 shadow-lg shadow-emerald-100",
        onClick: saveClassSettings
      }, null, _parent));
      _push(`</section></div></div><div class="grid grid-cols-1 gap-8 mt-8"><section class="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100"><div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"><div><h2 class="text-2xl font-black text-gray-800 flex items-center gap-2"> 우리반 <span class="text-blue-600">경제 전사들</span><span class="text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">${ssrInterpolate(studentOptions.value.length)}명</span></h2><p class="text-sm text-gray-400 mt-1">학생을 클릭하여 상세 정보를 보거나 해당 계정으로 대리 로그인할 수 있습니다.</p></div></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3"><!--[-->`);
      ssrRenderList(studentOptions.value, (student) => {
        _push(`<div class="${ssrRenderClass([
          "group relative flex flex-col items-center justify-center p-4 rounded-3xl cursor-pointer transition-all duration-300 border-2",
          selectedStudent.value === student.value ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-200 -translate-y-1" : "bg-white border-gray-50 hover:border-blue-200 hover:bg-blue-50/30"
        ])}"><div class="${ssrRenderClass([
          "w-12 h-12 flex items-center justify-center rounded-2xl mb-2 text-lg font-black transition-colors",
          selectedStudent.value === student.value ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-500"
        ])}">${ssrInterpolate(student.label.substring(0, 1))}</div><p class="${ssrRenderClass(["text-xs font-black truncate w-full text-center", selectedStudent.value === student.value ? "text-white" : "text-gray-700"])}">${ssrInterpolate(student.label)}</p><p class="${ssrRenderClass(["text-[10px] mt-0.5 font-bold", selectedStudent.value === student.value ? "text-white/70" : "text-gray-400"])}">${ssrInterpolate(Number(student == null ? void 0 : student.mb_point).toLocaleString())}P </p>`);
        if (selectedStudent.value === student.value) {
          _push(`<div class="absolute -top-2 -right-2 bg-yellow-400 text-white p-1 rounded-full shadow-md animate-bounce"><span class="i-heroicons-key-solid w-3 h-3"></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedStudentName.value) {
        _push(`<div class="mt-10 p-6 bg-gray-50 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6"><div class="flex items-center gap-4"><div class="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-3xl text-2xl font-black shadow-xl shadow-blue-200">${ssrInterpolate(selectedStudentName.value.substring(0, 1))}</div><div><h3 class="text-xl font-black text-gray-800">${ssrInterpolate(selectedStudentName.value)} <span class="text-sm font-bold text-gray-400 italic">Student Session</span></h3><p class="text-sm text-gray-500">학생의 지갑을 직접 관리하거나 활동 내역을 감시할 수 있습니다.</p></div></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          label: Number((_h = selectedStudentData.value) == null ? void 0 : _h.role_code) === Number(bankerRoleIdx.value) ? "은행원 해제" : "은행원 등록",
          size: "xl",
          color: Number((_i = selectedStudentData.value) == null ? void 0 : _i.role_code) === Number(bankerRoleIdx.value) ? "rose" : "blue",
          variant: "soft",
          class: "rounded-2xl px-8 font-black transition-all hover:scale-105",
          onClick: handleBankerToggle
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          label: `${selectedStudentName.value} 친구로 로그인하기`,
          size: "xl",
          color: "black",
          class: "rounded-2xl px-10 font-bold hover:scale-105 active:scale-95 transition-transform",
          onClick: onClickLogin
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-12"><div class="flex items-center justify-between mb-4 px-2"><h3 class="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2"><span class="i-heroicons-list-bullet w-5 h-5"></span> 최근 활동 타임라인 </h3>`);
      if (points.value.length > 0) {
        _push(`<span class="text-xs font-bold text-gray-300">${ssrInterpolate(selectedStudentName.value)}의 기록</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm">`);
      if (points.value.length > 0) {
        _push(`<div class="divide-y divide-gray-50"><!--[-->`);
        ssrRenderList(points.value, (item) => {
          _push(`<div class="flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors"><div class="flex items-center gap-4"><div class="${ssrRenderClass([
            "p-2 rounded-2xl flex items-center justify-center",
            item.point_type === "save" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"
          ])}"><span class="${ssrRenderClass([item.point_type === "save" ? "i-heroicons-plus-circle-solid" : "i-heroicons-minus-circle-solid", "w-6 h-6"])}"></span></div><div><p class="text-sm font-black text-gray-800">${ssrInterpolate(item.description)}</p><p class="text-xs text-gray-400 font-medium">${ssrInterpolate(item.c_datetime)}</p></div></div><div class="text-right"><p class="${ssrRenderClass(["text-sm font-black", item.point_type === "save" ? "text-blue-600" : "text-red-600"])}">${ssrInterpolate(item.point_type === "save" ? "+" : "-")}${ssrInterpolate(Number(item.point).toLocaleString())} <span class="text-[10px]">P</span></p></div></div>`);
        });
        _push(`<!--]-->`);
        if (isLoading.value) {
          _push(`<div class="p-10 text-center text-gray-400"><span class="i-heroicons-arrow-path w-6 h-6 animate-spin mx-auto block mb-2"></span> 로딩 중... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="py-20 text-center"><div class="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"><span class="i-heroicons-clipboard-document-list w-10 h-10 text-gray-300"></span></div><p class="text-sm font-bold text-gray-400">학생을 선택하면 최근 활동 내역이 표시됩니다.</p></div>`);
      }
      _push(`</div></div></section></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isHistoryModalOpen.value,
        "onUpdate:modelValue": ($event) => isHistoryModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ... (no changes) `);
          } else {
            return [
              createTextVNode(" ... (no changes) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isQRDesignModalOpen.value,
        "onUpdate:modelValue": ($event) => isQRDesignModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-6"${_scopeId}><h2 class="text-xl font-bold text-gray-800 flex items-center gap-2"${_scopeId}><span class="i-heroicons-swatch w-6 h-6 text-purple-500"${_scopeId}></span> QR 카드 디자인 설정 </h2><div class="space-y-2"${_scopeId}><p class="text-sm font-semibold text-gray-700"${_scopeId}>배경 이미지 등록</p><p class="text-xs text-gray-500"${_scopeId}>인쇄용 QR 카드의 배경 이미지를 업로드하고 위치를 조정하세요.</p><div class="mt-4 relative mx-auto w-full max-w-[350px] aspect-[1.6/1] border border-gray-200 rounded-lg overflow-hidden bg-white shadow-inner"${_scopeId}>`);
            if (previewQRBg.value || teacherInfo.value.qr_bg) {
              _push2(`<img${ssrRenderAttr("src", previewQRBg.value || (teacherInfo.value.qr_bg.startsWith("http") ? teacherInfo.value.qr_bg : unref(hostUrl) + teacherInfo.value.qr_bg))} style="${ssrRenderStyle({
                position: "absolute",
                top: qrTop.value + "px",
                left: qrLeft.value + "px",
                width: qrWidth.value + "%",
                zIndex: 0
              })}"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between border border-gray-100"${_scopeId}><div class="flex justify-between items-start"${_scopeId}><div class="w-16 h-4 bg-gray-200/50 rounded animate-pulse"${_scopeId}></div><div class="text-[10px] font-bold text-gray-400"${_scopeId}>1번 홍길동</div></div><div class="text-[8px] text-gray-300 leading-tight"${_scopeId}> 입출금은 은행원 승인이 필요합니다.<br${_scopeId}>이체는 개인 QR코드로 가능합니다. </div><div class="absolute bottom-2 right-2 w-12 h-12 border border-gray-200 bg-white/80 flex items-center justify-center"${_scopeId}><span class="i-heroicons-qr-code w-8 h-8 text-gray-300"${_scopeId}></span></div></div><input type="file" class="absolute inset-0 opacity-0 cursor-pointer z-20" accept="image/*"${_scopeId}></div><div class="mt-6 space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100"${_scopeId}><div class="space-y-1"${_scopeId}><div class="flex justify-between text-xs font-bold text-gray-600"${_scopeId}><span${_scopeId}>상단 위치 (Top Offset)</span><span${_scopeId}>${ssrInterpolate(qrTop.value)}px</span></div><input type="range"${ssrRenderAttr("value", qrTop.value)} min="-200" max="200" class="w-full accent-purple-600"${_scopeId}></div><div class="space-y-1"${_scopeId}><div class="flex justify-between text-xs font-bold text-gray-600"${_scopeId}><span${_scopeId}>좌측 위치 (Left Offset)</span><span${_scopeId}>${ssrInterpolate(qrLeft.value)}px</span></div><input type="range"${ssrRenderAttr("value", qrLeft.value)} min="-200" max="200" class="w-full accent-purple-600"${_scopeId}></div><div class="space-y-1"${_scopeId}><div class="flex justify-between text-xs font-bold text-gray-600"${_scopeId}><span${_scopeId}>이미지 너비 (Width)</span><span${_scopeId}>${ssrInterpolate(qrWidth.value)}%</span></div><input type="range"${ssrRenderAttr("value", qrWidth.value)} min="10" max="300" class="w-full accent-purple-600"${_scopeId}></div></div></div>`);
            if (teacherInfo.value.qr_bg) {
              _push2(`<div class="bg-purple-50 p-3 rounded-xl border border-purple-100 text-center"${_scopeId}><p class="text-[10px] text-purple-700 font-medium"${_scopeId}>현재 등록된 배경이 있습니다. 파일을 새로 선택하지 않으면 위치 설정만 저장됩니다.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "취소",
              color: "gray",
              variant: "ghost",
              onClick: ($event) => isQRDesignModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "배경으로 등록하고 저장",
              color: "purple",
              class: "px-6",
              onClick: handleQRBgUpload
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-6" }, [
                createVNode("h2", { class: "text-xl font-bold text-gray-800 flex items-center gap-2" }, [
                  createVNode("span", { class: "i-heroicons-swatch w-6 h-6 text-purple-500" }),
                  createTextVNode(" QR 카드 디자인 설정 ")
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("p", { class: "text-sm font-semibold text-gray-700" }, "배경 이미지 등록"),
                  createVNode("p", { class: "text-xs text-gray-500" }, "인쇄용 QR 카드의 배경 이미지를 업로드하고 위치를 조정하세요."),
                  createVNode("div", { class: "mt-4 relative mx-auto w-full max-w-[350px] aspect-[1.6/1] border border-gray-200 rounded-lg overflow-hidden bg-white shadow-inner" }, [
                    previewQRBg.value || teacherInfo.value.qr_bg ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: previewQRBg.value || (teacherInfo.value.qr_bg.startsWith("http") ? teacherInfo.value.qr_bg : unref(hostUrl) + teacherInfo.value.qr_bg),
                      style: {
                        position: "absolute",
                        top: qrTop.value + "px",
                        left: qrLeft.value + "px",
                        width: qrWidth.value + "%",
                        zIndex: 0
                      }
                    }, null, 12, ["src"])) : createCommentVNode("", true),
                    createVNode("div", { class: "absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between border border-gray-100" }, [
                      createVNode("div", { class: "flex justify-between items-start" }, [
                        createVNode("div", { class: "w-16 h-4 bg-gray-200/50 rounded animate-pulse" }),
                        createVNode("div", { class: "text-[10px] font-bold text-gray-400" }, "1번 홍길동")
                      ]),
                      createVNode("div", { class: "text-[8px] text-gray-300 leading-tight" }, [
                        createTextVNode(" 입출금은 은행원 승인이 필요합니다."),
                        createVNode("br"),
                        createTextVNode("이체는 개인 QR코드로 가능합니다. ")
                      ]),
                      createVNode("div", { class: "absolute bottom-2 right-2 w-12 h-12 border border-gray-200 bg-white/80 flex items-center justify-center" }, [
                        createVNode("span", { class: "i-heroicons-qr-code w-8 h-8 text-gray-300" })
                      ])
                    ]),
                    createVNode("input", {
                      type: "file",
                      onChange: onQRBgChange,
                      class: "absolute inset-0 opacity-0 cursor-pointer z-20",
                      accept: "image/*"
                    }, null, 32)
                  ]),
                  createVNode("div", { class: "mt-6 space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100" }, [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "flex justify-between text-xs font-bold text-gray-600" }, [
                        createVNode("span", null, "상단 위치 (Top Offset)"),
                        createVNode("span", null, toDisplayString(qrTop.value) + "px", 1)
                      ]),
                      withDirectives(createVNode("input", {
                        type: "range",
                        "onUpdate:modelValue": ($event) => qrTop.value = $event,
                        min: "-200",
                        max: "200",
                        class: "w-full accent-purple-600"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, qrTop.value]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "flex justify-between text-xs font-bold text-gray-600" }, [
                        createVNode("span", null, "좌측 위치 (Left Offset)"),
                        createVNode("span", null, toDisplayString(qrLeft.value) + "px", 1)
                      ]),
                      withDirectives(createVNode("input", {
                        type: "range",
                        "onUpdate:modelValue": ($event) => qrLeft.value = $event,
                        min: "-200",
                        max: "200",
                        class: "w-full accent-purple-600"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, qrLeft.value]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "flex justify-between text-xs font-bold text-gray-600" }, [
                        createVNode("span", null, "이미지 너비 (Width)"),
                        createVNode("span", null, toDisplayString(qrWidth.value) + "%", 1)
                      ]),
                      withDirectives(createVNode("input", {
                        type: "range",
                        "onUpdate:modelValue": ($event) => qrWidth.value = $event,
                        min: "10",
                        max: "300",
                        class: "w-full accent-purple-600"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, qrWidth.value]
                      ])
                    ])
                  ])
                ]),
                teacherInfo.value.qr_bg ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-purple-50 p-3 rounded-xl border border-purple-100 text-center"
                }, [
                  createVNode("p", { class: "text-[10px] text-purple-700 font-medium" }, "현재 등록된 배경이 있습니다. 파일을 새로 선택하지 않으면 위치 설정만 저장됩니다.")
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    label: "취소",
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => isQRDesignModalOpen.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    label: "배경으로 등록하고 저장",
                    color: "purple",
                    class: "px-6",
                    onClick: handleQRBgUpload
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teacher/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D0phq7L8.js.map
