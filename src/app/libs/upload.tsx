import toast from "react-hot-toast";

interface UploadEvent extends React.ChangeEvent<HTMLInputElement> {}

export async function upload(ev: UploadEvent, callbackFn: (link: string) => void) {
  const file = ev.target.files?.[0];

  if (file) {

    const uploadPromise = new Promise<string>((resolve, reject) => {
      const data = new FormData();
      data.set('file', file);
      fetch('/api/upload', {
        method: 'POST',
        body: data,
      }).then(response => {
        if (response.ok) {
          response.json().then((link: string) => {
            callbackFn(link);
            resolve(link);
          });
        } else {
          reject();
        }
      });
    });

    await toast.promise(uploadPromise, {
      loading: 'Uploading...',
      success: 'Uploaded!',
      error: 'Upload error!',
    });
  }
}
