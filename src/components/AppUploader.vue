<template>
  <div>
    <input type="file" ref="uploader" />
  </div>
</template>

<script setup>
import * as filepond from "filepond";
import axios from "axios";
import { onMounted, ref, defineEmits } from "vue";
const uploader = ref(null);

const emmitter = defineEmits(["fileUploaded"]);

onMounted(() => {
  const fp = filepond.create(uploader.value, {
    // allowRevert: false,
    allowMultiple: true,
    server: {
      process(filedName, file, metaData, load, error, progress, abort) {
        const { name, extension, size } = metaData.fileInfo;

        const form = new FormData();

        const cancelTokenSource = axios.CancelToken.source();

        axios
          .post("api/files/signed", { name, extension, size })
          .then((res) => {
            file.additionalData = res.data.additionalData;

            for (let field in file.additionalData) {
              form.append(field, file.additionalData[field]);
            }

            form.append("file", file);

            axios
              .post(res.data.attributes.action, form, {
                onUploadProgress(e) {
                  progress(e.lengthComputable, e.loaded, e.total);
                },
                cancelToken: cancelTokenSource.token,
              })
              .then(() => {
                load(`${res.data.additionalData.key}`);
              });

            // axios.post(res.data.actions.action, form);
          });

        return {
          abort: () => {
            cancelTokenSource.cancel();
            abort();
          },
        };
      },
    },
    onaddfile(err, file) {
      if (err) return;

      file.setMetadata("fileInfo", {
        name: file.filenameWithoutExtension,
        extension: file.fileExtension,
        size: file.fileSize,
      });
    },
    onprocessfile(e, file) {
      fp.removeFile(file);
      emmitter("fileUploaded", file);
    },
  });
});
</script>
